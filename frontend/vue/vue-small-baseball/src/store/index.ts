import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0,
    users: [],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    fetchUsers(state, users) {
      state.users = users;
    },
  },
  actions: {},
  modules: {},
});
