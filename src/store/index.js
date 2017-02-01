import Vuex, { Store } from 'vuex';
import initialGrid from './initialGrid';
import mutations from './mutations';
import { TOGGLE } from './mutationTypes';

export default (Vue) => {
  Vue.use(Vuex);
  return new Store({
    state: {
      grid: initialGrid,
    },
    mutations,
    actions: {
      [TOGGLE]: ({ commit }, payload) => commit(TOGGLE, payload),
    },
  });
};
