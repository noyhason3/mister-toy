

import { httpService }  from './http.service.js';
const REVIEW_URL = 'review/'

export const reviewService = {
  query,
  remove,
  save,
  getById,
  getEmptyReview,
};


function query(filterBy) {
    return httpService.get(REVIEW_URL, {params: filterBy})
  
  }
  

function getById(reviewId) {
  return httpService.get(REVIEW_URL + reviewId)
}

function getEmptyReview() {
  return {
    text: '',
  };
}



function remove(id) {
  return httpService.delete(REVIEW_URL + id)
}


function save(review) {
  if (review._id) {
    return httpService.put(REVIEW_URL + review._id, review)
  } else {
    return httpService.post(REVIEW_URL, review)
  }
}
