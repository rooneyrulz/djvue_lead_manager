import Vue from 'vue';
import Vuex from 'vuex';
import lead from './modules/lead';

// LOAD VUEX
Vue.use(Vuex);

// CREATE THE STORE
export default new Vuex.Store({
  modules: {
    lead
  }
});
