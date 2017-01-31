/* eslint-disable no-param-reassign */

// mutation types
export const TOGGLE = 'grid/TOGGLE';

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
  },
};
