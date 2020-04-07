import axios from 'axios';

const state = {
  leads: [],
};

const getters = {
  llLeads: (state) => {
    return state.leads;
  },
};

const actions = {
  getLeads: async ({ commit }) => {
    const { data } = await axios.get('http://localhost:8000/api/leads/');
    console.log(data);

    commit('setLeads', data);
  },
};

const mutations = {
  setLeads: (state, data) => (state.leads = [...data]),
};

export default { state, getters, actions, mutations };
