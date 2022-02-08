import { createStore } from 'vuex';

import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import counterModule from './counter/index';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  // use these instead of direct using the mutations
  actions: rootActions,
  getters: rootGetters,
});

export default store;
