// import {storageService} from './storage.service.js'
// import {utilService} from './util.service.js'

// const KEY = 'toysDB';

// export const toyService = {
//     query,
//     getById,
//     remove,
//     save,
//     getEmptyToy
// }

// _createToys()

// function query(filterBy) {
//     return storageService.query(KEY)
//         .then((toys)=>{
//             return toys.filter((toy)=>{
//                 return (toy.name.toLowerCase().includes(filterBy.name.toLowerCase())
//                 && (filterBy.stock==='All' || (filterBy.stock==='Stock' && toy.inStock===true) || (filterBy.stock==='Out'&& toy.stock===false) )
//                 && (filterBy.type==='All' || filterBy.type.toLowerCase()===toy.type.toLowerCase()))
//             })
//         })
// }

// function getById(id) {
//    return storageService.get(KEY,id)
// }

// function remove(id) {
//     return storageService.remove(KEY,id)
// }

// function save(toy) {
//     const savedToy = (toy._id) ? storageService.put(KEY,toy) : storageService.post(KEY, toy)
//     return savedToy
// }

// function getEmptyToy() {
//     return {
//         name: '',
//         price: '',
//         type: '',
//         createdAt: Date.now(),
//         inStock: true
//     }
// }

// // *********************

// function _createToys() {
//     var toys = JSON.parse(localStorage.getItem(KEY))
//     if (!toys || !toys.length) {
//         toys = [
//                 _createToy({name:'Talking toy',type:'Funny'}),
//                 _createToy({name:'Robot',type:'Mechanism'}),
//                 _createToy({name:'Barbie',type:'Girls'}),
//             ]
//         localStorage.setItem(KEY, JSON.stringify(toys))
//     }
//     return toys;
// }

// function _createToy({name, type}) {
//     return {
//         _id: utilService.makeId(),
//         name: name,
//         price: utilService.getRandomInt(50,500),
//         type: type,
//         createdAt: Date.now(),
//         inStock: true
//     }
// }

// import axios from 'axios';
import { httpService } from './http.service.js';
import { utilService } from './util.service.js';
const TOY_URL = 'toy/';

// const TOY_URL = (process.env.NODE_ENV !== 'development')
//  ? '/api/toy/'
//  : '//localhost:3030/api/toy/'

export const toyService = {
  query,
  remove,
  save,
  getById,
  getEmptyToy,
  saveReview,
};

function getById(toyId) {
  return httpService.get(TOY_URL + toyId);
}

function getEmptyToy() {
  return {
    name: '',
    price: '',
    type: '',
    createdAt: Date.now(),
    inStock: true,
  };
}

function query(filterBy) {
  return httpService.get(TOY_URL, { params: filterBy });
  // const toys = httpService.get('toy', {params: filterBy})
  // console.log(toys);
  // return toys
}

// function query() {
//   return axios.get(TOY_URL).then(({ data }) => data);
// }

function remove(id) {
  return httpService.delete(TOY_URL + id);
}
// function remove(id) {
//   return axios.delete(TOY_URL + id).then(({ data }) => console.log(data));
// }

function save(toy) {
  if (toy._id) {
    return httpService.put(TOY_URL + toy._id, toy);
  } else {
    return httpService.post(TOY_URL, toy);
  }
}

function saveReview(toyId, review) {
  review._id = utilService.makeId();
  return httpService.post(TOY_URL + toyId + '/review', review);
}
