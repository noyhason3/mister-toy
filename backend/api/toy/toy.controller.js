const express = require('express');
const router = express.Router();
const toyService = require('./toy.service');
const logger = require('../../services/logger.service')

async function getToys(req, res) {
  try{
      const toys = await toyService.query()
      res.json(toys)
  } catch (err){
    logger.error('Failed to get toys', err)
    res.status(500).send({ err: 'Failed to get toys' });
  }
}

async function getToy(req, res) {
  try{
    const toyId = req.params.toyId;
      const toy = await toyService.getById(toyId)
      res.json(toy)
  } catch (err){
    logger.error('Failed to get toy', err)
    res.status(500).send({ err: 'Failed to get toy' });
  }
}


async function addToy(req, res) {
  try {
    const toy = req.body
    const savedToy = await toyService.add(toy)
      res.send(savedToy)
  } catch (err) {
      logger.error('Failed to add toy', err)
      res.status(500).send({ err: 'Failed to add toy' })
  }
}

async function updateToy(req, res) {
  try {
    console.log(req.body);
    const toy = req.body
    const savedToy = await toyService.update(toy)
      res.send(savedToy)
  } catch (err) {
      logger.error('Failed to add toy', err)
      res.status(500).send({ err: 'Failed to add toy' })
  }
}

async function deleteToy(req, res) {
  try {
    const toyId = req.params.toyId;
    const deletedToy = await toyService.remove(toyId)
      res.send(deletedToy)
  } catch (err) {
      logger.error('Failed to delete toy', err)
      res.status(500).send({ err: 'Failed to delete toy' })
  }
}

async function saveReview(req,res){
  try{
    const toyId = req.params.toyId;
    const review = req.body;

    const toy = await toyService.getById(toyId)
    toy.reviews.push(review)
    const savedToy = await toyService.update(toy)
    res.send(savedToy)

  } catch (err){
    logger.error('Failed to add review', err)
    res.status(500).send({ err: 'Failed to add review' })
  }
}

module.exports = {
  getToy,
  getToys,
  deleteToy,
  updateToy,
  addToy,
  saveReview

};



// router.put('/:toyId', (req, res) => {
//   const toy = req.body;

//   toyService.save(toy).then((savedToy) => {
//     res.json(savedToy);
//   });
// });

// router.delete('/:toyId', (req, res) => {

//   const toyId = req.params.toyId;
//   console.log(toyId);
//   toyService
//     .remove(toyId)
//     .then(() => {
//       return res.json('toy is deleted');
//     })
//     .catch((err) =>
//       res.status(401).send("you cant update another person's car!")
//     );
// });






