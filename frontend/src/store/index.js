import Vue from 'vue'
import Vuex from 'vuex'
import { toyService } from '../service/toy.service.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toys: [],
    filterBy:{
      name: '',
      stock: 'All',
      type: 'All'
    },
    sortBy: 'name',
    center:'Tel-Aviv'
  },
  getters:{
    toysToDisplay: (state) => state.toys,
    filterBy(state){
      return state.filterBy
    },
    center(state){
     
      return state.center
    },
  },
  mutations: {
    setToys(state,{toys}){
      state.toys = toys
      console.log(state.toys);
    },
    updateToy(state,{savedToy}){
      const idx = state.toys.findIndex(toy=>toy._id===savedToy._id)
      state.toys.splice(idx,1,savedToy)
    },
    addToy(state,{savedToy}){
      state.toys.push(savedToy)
    },
    removeToy(state,{toyId}){
      const idx = state.toys.findIndex(toy=>toy._id===toyId)
      state.toys.splice(idx,1)
    },
    setFilterBy(state,{filterBy}){
      state.filterBy = filterBy;
    },
    setSortBy(state,{sortBy}){
      state.sortBy = sortBy
      // const sortBy = state.sortBy
      const toysCopy = [...state.toys]
      if (sortBy==='Name'){
       return toysCopy.sort((toy1,toy2)=>{
          return toy1.localeCompare(toy2)}) 
        } else if (sortBy==='Price') {
       return toysCopy.sort((toy1,toy2)=>{
          return toy1-toy2
        })
      }
      state.toys = toysCopy;
    },
    setCenter(state,{center}){
      state.center= center
    }
  },
  actions: {
    getAllToys(){
     return toyService.query({ name: '', stock: 'All', type: 'All' })
    },
    loadToys({commit, getters}){
      const filterBy = getters.filterBy
     toyService.query(filterBy)
        .then((toys)=>{
          commit({type:'setToys', toys})
        })
    },
    saveToy({commit}, {toyToSave}){
      const type = toyToSave._id ? 'updateToy' : 'addToy'
      return toyService.save(toyToSave)
        .then(savedToy=>{
           return commit({type, savedToy})
        })
    },
    removeToy({commit},{toyId}){
      return toyService.remove(toyId)
        .then(()=>{
          return commit({type:'removeToy', toyId})
        })
    },
  },
  created(){
    return this.$store.dispatch({type:'loadToys'})
  },
  modules: {
  }
})
