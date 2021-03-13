// const gToys = require('../../data/toy.json');

// function query(filterBy) {
//   const toys = gToys.filter(toy => {
//     return (
//       toy.name.toLowerCase().includes(filterBy.name.toLowerCase()) &&
//       (filterBy.stock === 'All' ||
//         (filterBy.stock === 'Stock' && toy.inStock === true) ||
//         (filterBy.stock === 'Out' && toy.inStock === false)) &&
//       (filterBy.type === 'All' ||
//         filterBy.type.toLowerCase() === toy.type.toLowerCase())
//     );
//   });
//   return Promise.resolve(toys);
// }

// function getById(id) {
//   const toy = gToys.find((toy) => toy._id === id);
//   return Promise.resolve(toy);
// }

// // function save(toy, toyId) {
// function save(toy) {
//   if (toy._id) {
//     const idx = gToys.findIndex(({ _id }) => _id === toy._id);
//     if (idx < 0) return Promise.reject('no toy found', toy._id);
//     // if (gToys[idx].owner._id !== toyId) return Promise.reject('not your toy!');
//     gToys.splice(idx, 1, toy);
//   } else {
//     toy._id = _makeId();
//     gToys.unshift(toy);
//   }
//   return _saveToysToFile().then(() => toy);
// }
 
// // function remove(toyId, toyId) {
// function remove(toyId) {
//   const idx = gToys.findIndex((toy) => toy._id.toString() === toyId.toString());

//   // if (gToys[idx].owner._id !== toyId) return Promise.reject('please login');
//   gToys.splice(idx, 1);

//   return _saveToysToFile();
// }

// module.exports = {
//   query,
//   getById,
//   save,
//   remove,
// };

// function _makeId(length = 5) {
//   var txt = '';
//   var possible =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   for (var i = 0; i < length; i++) {
//     txt += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return txt;
// }

// function _saveToysToFile() {
//   return new Promise((resolve, reject) => {
//     const fs = require('fs');
//     fs.writeFile('data/toy.json', JSON.stringify(gToys, null, 2), (err) => {
//       if (err) reject(err);
//       else resolve();
//     });
//   });
// }



const dbService = require('../../services/db.service')
// const logger = require('../../services/logger.service')
const reviewService = require('../review/review.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    // getByToyname,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('toy')
        var toys = await collection.find(criteria).toArray()
        // toys = toys.map(toy => {
            // delete toy.password
            // toy.isHappy = true
            // toy.createdAt = ObjectId(toy._id).getTimestamp()
            // Returning fake fresh data
            // toy.createdAt = Date.now() - (1000 * 60 * 60 * 24 * 3) // 3 days ago
            // return toy
        // })
        return toys
    } catch (err) {
        logger.error('cannot find toys', err)
        throw err
    }
}

async function getById(toyId) {
    try {
        const collection = await dbService.getCollection('toy')
        const toy = await collection.findOne({ '_id': ObjectId(toyId) })
        // delete toy.password

        // toy.givenReviews = await reviewService.query({ byToyId: ObjectId(toy._id) })
        // toy.givenReviews = toy.givenReviews.map(review => {
        //     delete review.byToy
        //     return review
        // })

        return toy
    } catch (err) {
        logger.error(`while finding toy ${toyId}`, err)
        throw err
    }
}


async function remove(toyId) {
    try {
        const collection = await dbService.getCollection('toy')
        await collection.deleteOne({ '_id': ObjectId(toyId) })
    } catch (err) {
        logger.error(`cannot remove toy ${toyId}`, err)
        throw err
    }
}

async function update(toy) {
    try {
        // peek only updatable fields!
        const toyToSave = {
            _id: ObjectId(toy._id),
            name: toy.name,
            price: toy.price,
            type: toy.type,
            reviews: toy.reviews
            // inStock: toy.inStock
        }
        const collection = await dbService.getCollection('toy')
        await collection.updateOne({ '_id': toyToSave._id }, { $set: toyToSave })
        return toyToSave;
    } catch (err) {
        logger.error(`cannot update toy ${toy._id}`, err)
        throw err
    }
}

async function add(toy) {
    try {
        // peek only updatable fields!
        const toyToAdd = {
          name: toy.name,
          price: toy.price,
          type: toy.type,
          inStock: true
        }
        const collection = await dbService.getCollection('toy')
        await collection.insertOne(toyToAdd)
        return toyToAdd
    } catch (err) {
        logger.error('cannot insert toy', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.txt) {
        const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
        criteria.$or = [
            {
                toyname: txtCriteria
            },
            {
                fullname: txtCriteria
            }
        ]
    }
    if (filterBy.minBalance) {
        criteria.balance = { $gte: filterBy.minBalance }
    }
    return criteria
}


