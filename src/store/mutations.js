/* eslint-disable no-param-reassign */

import {
  TOGGLE,
  RESET,
  SHOW_ANSWERS,
  NEXT_GRID,
  PREVIOUS_GRID,
  NAVIGATE,
  HIDE_VICTORY,
} from './mutationTypes';

import {
  isSolved,
  getTentsInRow,
  getTentsInColumn,
  hasBeenEdited,
} from './game';

import { addSolvedGrid, getSolvedGridIds } from './localStorage';

const updateGridStats = state => {
  state.tentsInRow = getTentsInRow(state.grid);
  state.tentsInColumn = getTentsInColumn(state.grid);
  state.solved = isSolved(state.grid);
  state.hasBeenEdited = hasBeenEdited(state.grid);
  state.showVictory = isSolved(state.grid);

  if (state.solved) {
    addSolvedGrid(state.currentGridId);
    state.solvedGridIds = getSolvedGridIds();
  }
};

export default {
  [TOGGLE]: (state, { row, column }) => {
    if (!state.solved) {
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
      updateGridStats(state);
    }
  },
  [RESET]: state => {
    state.grid.forEach(row => {
      row.forEach(item => {
        if (item.selected !== 'tree') {
          item.selected = '';
        }
      });
    });
    updateGridStats(state);
  },
  [SHOW_ANSWERS]: state => {
    state.showAnswers = true;
  },
  [NEXT_GRID]: state => {
    const newGridId = state.grids[state.currentGridId + 1]
      ? state.currentGridId + 1
      : 0;
    state.grid = state.grids[newGridId];
    state.currentGridId = newGridId;
    updateGridStats(state);
  },
  [PREVIOUS_GRID]: state => {
    const newGridId = state.grids[state.currentGridId - 1]
      ? state.currentGridId - 1
      : state.grids.length - 1;
    state.grid = state.grids[newGridId];
    state.currentGridId = newGridId;
    updateGridStats(state);
  },
  [NAVIGATE]: (state, { id }) => {
    const newGridId = id;
    state.grid = state.grids[newGridId];
    state.currentGridId = newGridId;
    updateGridStats(state);
  },
  [HIDE_VICTORY]: state => {
    state.showVictory = false;
  },
};
