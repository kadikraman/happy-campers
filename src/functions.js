// TODO: these are eventually going to live in sth like getInitialState() in the store
// leaving them here initially so could test them individually

/* eslint-disable import/prefer-default-export */
/* eslint-disable no-confusing-arrow */
export const getTentsInRow = grid => grid.map(row => row.reduce((acc, item) => item.shouldBe === 'tent' ? acc + 1 : acc, 0));
