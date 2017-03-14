import { Store } from 'vuex';
import initialGrid from './initialGrid';
import mutations from './mutations';
import { TOGGLE, RESET } from './mutationTypes';
import { isSolved, getTentsInRow, getTentsInColumn } from './game';

export default () =>
  new Store({
    state: {
      grid: initialGrid,
      solved: isSolved(initialGrid),
      tentsInRow: getTentsInRow(initialGrid),
      tentsInColumn: getTentsInColumn(initialGrid),
      hasBeenEdited: false,
    },
    mutations,
    actions: {
      [TOGGLE]: ({ commit }, payload) => commit(TOGGLE, payload),
      [RESET]: ({ commit }) => commit(RESET),
    },
  });
