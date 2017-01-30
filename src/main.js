// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import App from './App';
import initialGrid from './initialGrid';

Vue.use(Vuex);
/* eslint-disable no-param-reassign */

const store = new Store({
  state: {
    grid: initialGrid,
  },
  mutations: {
    onClick: (state, { row, column }) => {
      switch (state.grid[row][column].selected) {
        case '':
          state.grid[row][column].selected = 'grass';
          break;
        case 'grass':
          state.grid[row][column].selected = 'tent';
          break;
        case 'tent':
          state.grid[row][column].selected = '';
          break;
        default:
          break;
      }
    },
  },
  actions: {
    onClick({ commit }, payload) {
      commit('onClick', payload);
    },
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
});
