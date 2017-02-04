import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';

import createStore from './store';

Vue.use(Vuex);
const store = createStore();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
});
