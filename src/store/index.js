import { Store } from 'vuex';
import grid0 from './grids/8x8_0';
import grid1 from './grids/8x8_1';
import grid2 from './grids/8x8_2';
import grid3 from './grids/8x8_3';
import grid4 from './grids/8x8_4';
import mutations from './mutations';
import {
  TOGGLE,
  RESET,
  NEXT_GRID,
  PREVIOUS_GRID,
  NAVIGATE,
} from './mutationTypes';
import { isSolved, getTentsInRow, getTentsInColumn } from './game';

export default () =>
  new Store({
    state: {
      grids: [grid0, grid1, grid2, grid3, grid4],
      currentGridId: 0,
      grid: grid0,
      solved: isSolved(grid0),
      tentsInRow: getTentsInRow(grid0),
      tentsInColumn: getTentsInColumn(grid0),
      hasBeenEdited: false,
    },
    mutations,
    actions: {
      [TOGGLE]: ({ commit }, payload) => commit(TOGGLE, payload),
      [RESET]: ({ commit }) => commit(RESET),
      [NEXT_GRID]: ({ commit }) => commit(NEXT_GRID),
      [PREVIOUS_GRID]: ({ commit }) => commit(PREVIOUS_GRID),
      [NAVIGATE]: ({ commit }, payload) => commit(NAVIGATE, payload),
    },
  });
