import Vue from 'vue'
import Vuex from 'vuex'
import { authService } from '../service/auth.service.js'

Vue.use(Vuex)

export const userStore = {
  state: {
    loggedinUser: null,
  },
  getters:{
    loggedinUser : (state)=> state.loggedinUser
  },
  mutations: {
    login(state, {user}){
      state.loggedinUser = user;
    },
    logout(state){
      state.loggedinUser = null;
    },
    setLoggedinUser(state){
      state.loggedinUser = authService.getLoggedinUser()
    }
  },
  actions: {
    signup({commit},{newUser}){
      return authService.signup(newUser)
        .then((credentials)=>{
          return commit({type:'login',credentials})

        })
    },
    login({commit},{credentials}){
      return authService.login(credentials)
        .then((user)=>{
          console.log(user);
          return commit({type:'login',user})
        })
    },
    logout({commit}){
      return authService.logout()
        .then(()=>{
          return commit({type:'logout'})
        })
    },

  },
  created(){
  },
  modules: {
  }
}
