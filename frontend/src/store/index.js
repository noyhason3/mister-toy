import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { toyStore } from './toy.store.js'
import { userStore } from './user.store.js'

export default new Vuex.Store({
  state: {
    center: 'Tel-Aviv',
  },
  getters: {
    center : (state) => state.center
  },
  mutations: {
    setCenter(state, { center }) {
      state.center = center;
      }
    },
    actions: {
      showMsg({ commit }, { txt, type = 'success' }) {},
    },
    created() {
    },
    modules: {
      toyStore,
      userStore
    },
});
