import zip from 'lodash/zip';
import flow from 'lodash/fp/flow';

export const isSolved = (grid) => {
  let solved = true;
  grid.forEach((row) => {
    row.forEach((item) => {
      if (item.selected !== item.shouldBe && item.selected !== 'tree') {
        solved = false;
      }
    });
  });
  return solved;
};

export const getTentsInRow = grid => grid.map(row => row.reduce((acc, item) => ({
  numSelected: item.selected === 'tent' ? acc.numSelected + 1 : acc.numSelected,
  numShouldBe: item.shouldBe === 'tent' ? acc.numShouldBe + 1 : acc.numShouldBe,
}), { numSelected: 0, numShouldBe: 0 }));

export const getTentsInColumn = grid => flow(zip, getTentsInRow)(...grid);

export const hasBeenEdited = (grid) => {
  let edited = false;
  grid.forEach((row) => {
    row.forEach((item) => {
      if (item.selected !== '' && item.selected !== 'tree') {
        edited = true;
      }
    });
  });
  return edited;
};
