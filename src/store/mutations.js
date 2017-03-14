/* eslint-disable no-param-reassign */

import { TOGGLE, RESET, SHOW_ANSWERS } from './mutationTypes';
import {
  isSolved,
  getTentsInRow,
  getTentsInColumn,
  hasBeenEdited,
} from './game';

export default {
  [TOGGLE]: (state, { row, column }) => {
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

    // TODO: move this into its own method/mutation
    state.tentsInRow = getTentsInRow(state.grid);
    state.tentsInColumn = getTentsInColumn(state.grid);
    state.solved = isSolved(state.grid);
    state.hasBeenEdited = hasBeenEdited(state.grid);
  },
  [RESET]: state => {
    state.grid.forEach(row => {
      row.forEach(item => {
        if (item.selected !== 'tree') {
          item.selected = '';
        }
      });
    });

    // TODO: move this into its own method/mutation
    state.tentsInRow = getTentsInRow(state.grid);
    state.tentsInColumn = getTentsInColumn(state.grid);
    state.solved = isSolved(state.grid);
    state.hasBeenEdited = hasBeenEdited(state.grid);
  },
  [SHOW_ANSWERS]: state => {
    state.showAnswers = true;
  },
};
