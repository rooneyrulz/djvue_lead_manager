// import axios from 'axios';

const state = {
  leads: [
    {
      id: 21212,
      name: 'Kumar',
      email: 'kumar@kumar.com',
      country: 'India'
    },
    {
      id: 3434343,
      name: 'Denial',
      email: 'denial@denial.com',
      country: 'Canada'
    }
  ]
};

const getters = {
  llLeads: state => state.leads
};

const actions = {};

const mutations = {};

export default { state, getters, actions, mutations };
