import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { toyStore } from './toy.store.js'
import { userStore } from './user.store.js'

export default new Vuex.Store({
  state: {
    // toys: [],
    // filterBy:{
    //   name: '',
    //   stock: 'All',
    //   type: 'All'
    // },
    // sortBy: 'name',
    center: 'Tel-Aviv',
    // loggedinUser: null,
  },
  getters: {
    // toysToDisplay: (state) => state.toys,
    // filterBy(state) {
    //   return state.filterBy;
    // },
    center(state) {
      return state.center;
    },
    // loggedinUser(state) {
    //   return state.loggedinUser;
    // },
  },
  mutations: {
    // setToys(state,{toys}){
    //   state.toys = toys
    //   console.log(state.toys);
    // },
    // updateToy(state,{savedToy}){
    //   const idx = state.toys.findIndex(toy=>toy._id===savedToy._id)
    //   state.toys.splice(idx,1,savedToy)
    // },
    // addToy(state,{savedToy}){
    //   state.toys.push(savedToy)
    // },
    // removeToy(state,{toyId}){
    //   const idx = state.toys.findIndex(toy=>toy._id===toyId)
    //   state.toys.splice(idx,1)
    // },
    // setFilterBy(state,{filterBy}){
    //   state.filterBy = filterBy;
    // },
    // setSortBy(state,{sortBy}){
    //   state.sortBy = sortBy
    //   // const sortBy = state.sortBy
    //   const toysCopy = [...state.toys]
    //   if (sortBy==='Name'){
    //    return toysCopy.sort((toy1,toy2)=>{
    //       return toy1.localeCompare(toy2)})
    //     } else if (sortBy==='Price') {
    //    return toysCopy.sort((toy1,toy2)=>{
    //       return toy1-toy2
    //     })
    //   }
    //   state.toys = toysCopy;
    // },
    setCenter(state, { center }) {
      state.center = center;
      // },
      // login(state, {user}){
      //   state.loggedinUser = user;
      // },
      // logout(state){
      //   state.loggedinUser = null;
      // },
      // setLoggedinUser(state){
      //   state.loggedinUser = authService.getLoggedinUser()
      }
    },
    actions: {
      // getAllToys(){
      //  return toyService.query({ name: '', stock: 'All', type: 'All' })
      // },
      // loadToys({commit, getters}){
      //   //     const filterBy = getters.filterBy
      //   // (async ()=>{
      //   //   try{
      //   //     const toys = await toyService.query(filterBy)
      //   //     commit({type:'setToys', toys})
      //   //   } catch(err){
      //   //     console.log('Store: Cannot load toys', err);
      //   //     throw err;
      //   //   }
      //   // })
      //  toyService.query(filterBy)
      //     .then((toys)=>{
      //       commit({type:'setToys', toys})
      //     })
      // },
      // saveToy({commit}, {toyToSave}){
      //   const type = toyToSave._id ? 'updateToy' : 'addToy'
      //   return toyService.save({...toyToSave})
      //     .then(savedToy=>{
      //        return commit({type, savedToy})
      //     })
      // },
      // removeToy({commit},{toyId}){
      //   return toyService.remove(toyId)
      //     .then(()=>{
      //       return commit({type:'removeToy', toyId})
      //     })
      // },
      // signup({commit},{newUser}){
      //   return authService.signup(newUser)
      //     .then((credentials)=>{
      //       return commit({type:'login',credentials})

      //     })
      // },
      // login({commit},{credentials}){
      //   return authService.login(credentials)
      //     .then((user)=>{
      //       console.log(user);
      //       return commit({type:'login',user})
      //     })
      // },
      // logout({commit}){
      //   return authService.logout()
      //     .then(()=>{
      //       return commit({type:'logout'})
      //     })
      // },
      // addReview({commit},{toyId, reviewToAdd}){
      //   toyService.saveReview(toyId, reviewToAdd)
      //     .then(savedToy=>{
      //       return commit({type:'updateToy', savedToy})
      //     })
      // },
      showMsg({ commit }, { txt, type = 'success' }) {},
    },
    created() {
      //  this.$store.dispatch({type:'loadToys'})
      //  this.$store.commit({type:'setLoggedinUser'})
    },
    modules: {
      toyStore,
      userStore
    },
});
