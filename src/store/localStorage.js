const SOLVED = 'solvedGrids';

export const getSolvedGridIds = () => {
  const rawString = localStorage.getItem(SOLVED); // eslint-disable-line
  if (!rawString) return [];

  return rawString.split(',').map(p => Number(p));
};

export const addSolvedGrid = id => {
  const solvedPuzzle = getSolvedGridIds();
  if (solvedPuzzle.indexOf(id) !== -1) return;
  const newSolvedPuzzles = [...getSolvedGridIds(), id];
  localStorage.setItem(SOLVED, newSolvedPuzzles); // eslint-disable-line
};
