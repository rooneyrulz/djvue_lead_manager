import axios from 'axios';

const state = {
  loading: true,
  leads: [],
  lead: null,
};

const getters = {
  llLeads: (state) => state.leads,
  lead: (state) => state.lead,
  loading: (state) => state.loading,
};

const actions = {
  getLeads: async ({ commit }) => {
    const { data } = await axios.get('http://localhost:8000/api/leads/');
    commit('setLeads', data);
    commit('setLoading');
  },
  getLead: async ({ commit }, id) => {
    const { data } = await axios.get(`http://localhost:8000/api/leads/${id}`);
    commit('setLead', data);
    commit('setLoading');
  },
};

const mutations = {
  setLeads: (state, data) => (state.leads = [...data]),
  setLead: (state, data) => (state.lead = { ...data }),
  setLoading: (state) => (state.loading = false),
};

export default { state, getters, actions, mutations };
