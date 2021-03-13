import { utilService } from './util.service.js'

let gLoggedinUser = utilService.loadFromStorage('loggedinUser');

import { httpService }  from './http.service.js';
const USER_URL = 'auth'

export const authService = {
    signup,
    login,
    getLoggedinUser,
    logout,
    query,
    remove,
    save,
}


function query() {
    return httpService.get(USER_URL)
  }
  
  function remove(id) {
    return httpService.delete(USER_URL + id)
  }
  
  function save(user) {
    if (user._id) {
      return httpService.put(USER_URL + user._id, user)
    } else {
      return httpService.post(USER_URL, user)
    }
  }
  


function getLoggedinUser(){
    return gLoggedinUser
}


function signup(credentials){
    return httpService.post(USER_URL+'/signup', credentials) 
         .then(user=>{
             gLoggedinUser = user;
             utilService.saveToStorage('loggedinUser', gLoggedinUser)
             return user
         })
 }

function login(credentials){
    // console.log({...credentials},'hi');
   return httpService.post(USER_URL+'/login', {...credentials})
        .then(user=>{
            gLoggedinUser = user;
            utilService.saveToStorage('loggedinUser', gLoggedinUser)
            return user
        })
}

function logout(){
   return httpService.post(USER_URL+'/logout')   
        .then(()=>{
            gLoggedinUser = null
            utilService.saveToStorage('loggedinUser', null)
        })
}