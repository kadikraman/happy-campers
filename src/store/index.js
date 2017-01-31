import Vuex, { Store } from 'vuex';
import initialGrid from './initialGrid';
import mutations, { TOGGLE } from './mutations';

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
