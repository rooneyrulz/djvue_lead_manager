// import axios from 'axios';

export const state = {
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

export const getters = {
  llLeads: state => {
    return state.leads;
  }
};

export const actions = {};

export const mutations = {};
