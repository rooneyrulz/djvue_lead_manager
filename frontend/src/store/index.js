import Vue from 'vue';
import Vuex from 'vuex';
import { state, getters, actions, mutations } from './modules/lead';

// LOAD VUEX
Vue.use(Vuex);

// CREATE THE STORE
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
