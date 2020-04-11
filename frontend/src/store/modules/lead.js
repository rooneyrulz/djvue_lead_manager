import axios from 'axios';

const state = {
  loading: true,
  leads: [],
};

const getters = {
  llLeads: (state) => state.leads,
  loading: (state) => state.loading,
};

const actions = {
  getLeads: async ({ commit }) => {
    const { data } = await axios.get('http://localhost:8000/api/leads/');
    commit('setLeads', data);
    commit('setLoading');
  },
};

const mutations = {
  setLeads: (state, data) => (state.leads = [...data]),
  setLoading: (state) => (state.loading = false),
};

export default { state, getters, actions, mutations };
