import { httpService } from './http.service.js';
import { utilService } from './util.service.js';
const TOY_URL = 'toy/';

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
  return httpService.get(TOY_URL, filterBy, true );
}


function remove(id) {
  return httpService.delete(TOY_URL + id);
}

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
