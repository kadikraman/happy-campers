import mutations from './mutations';
import {
  TOGGLE,
  RESET,
  SHOW_ANSWERS,
  NEXT_GRID,
  PREVIOUS_GRID,
  NAVIGATE,
} from './mutationTypes';

describe('mutations', () => {
  describe('TOGGLE', () => {
    it('toggles a grass tile correctly', () => {
      const state = {
        grid: [[{ selected: '' }, { selected: 'grass' }]],
      };
      const payload = { row: 0, column: 1 };
      mutations[TOGGLE](state, payload);
      expect(state.grid).to.deep.equal([
        [{ selected: '' }, { selected: 'tent' }],
      ]);
    });

    it('toggles empty tiles correctly', () => {
      const state = {
        grid: [[{ selected: '' }, { selected: '' }]],
      };
      const payload = { row: 0, column: 1 };
      mutations[TOGGLE](state, payload);
      expect(state.grid).to.deep.equal([
        [{ selected: '' }, { selected: 'grass' }],
      ]);
    });

    it('toggles tent tiles correctly', () => {
      const state = {
        grid: [[{ selected: '' }, { selected: 'tent' }]],
      };
      const payload = { row: 0, column: 1 };
      mutations[TOGGLE](state, payload);
      expect(state.grid).to.deep.equal([[{ selected: '' }, { selected: '' }]]);
    });

    it('does not modify tree tiles', () => {
      const state = {
        grid: [[{ selected: '' }, { selected: 'tree' }]],
      };
      const payload = { row: 0, column: 1 };
      mutations[TOGGLE](state, payload);
      expect(state.grid).to.deep.equal(state.grid);
    });
  });

  describe('RESET', () => {
    it('resets the grid to an untouched state', () => {
      const state = {
        grid: [
          [
            { selected: 'tent', shouldBe: 'tent' },
            { selected: 'grass', shouldBe: 'grass' },
          ],
        ],
        solved: true,
        hasBeenEdited: true,
        tentsInRow: [{ numSelected: 1, numShouldBe: 1 }],
        tentsInColumn: [{ numSelected: 1, numShouldBe: 1 }],
      };
      const expectedState = {
        grid: [
          [
            { selected: '', shouldBe: 'tent' },
            { selected: '', shouldBe: 'grass' },
          ],
        ],
        solved: false,
        hasBeenEdited: false,
        tentsInRow: [{ numSelected: 0, numShouldBe: 1 }],
        tentsInColumn: [
          { numSelected: 0, numShouldBe: 1 },
          { numSelected: 0, numShouldBe: 0 },
        ],
      };
      mutations[RESET](state);
      expect(state).to.deep.equal(expectedState);
    });

    it('does not reset trees', () => {
      const state = {
        grid: [[{ selected: 'tree' }]],
      };
      mutations[RESET](state);
      expect(state.grid).to.deep.equal(state.grid);
    });
  });

  describe('SHOW_ANSWERS', () => {
    it('sets showAnswers to true', () => {
      const state = {
        showAnswers: false,
      };
      const expectedState = {
        showAnswers: true,
      };
      mutations[SHOW_ANSWERS](state);
      expect(state).to.deep.equal(expectedState);
    });
  });

  describe('NEXT_GRID', () => {
    const currentGrid = [[{ selected: '', shouldBe: 'tree' }]];
    const newGrid = [[{ selected: '', shouldBe: 'tent' }]];
    const newestGrid = [[{ selected: '', shouldBe: 'grass' }]];

    it('displays the next grid', () => {
      const state = {
        grid: currentGrid,
        currentGridId: 0,
        grids: [currentGrid, newGrid, newestGrid],
      };
      const expectedState = {
        grid: newGrid,
        currentGridId: 1,
        grids: [currentGrid, newGrid, newestGrid],
      };
      mutations[NEXT_GRID](state);

      expect(state.grid).to.deep.equal(expectedState.grid);
      expect(state.currentGridId).to.deep.equal(expectedState.currentGridId);
      expect(state.grids).to.deep.equal(expectedState.grids);
    });

    it('goes back to first grid if there are no more grids available', () => {
      const state = {
        grid: newestGrid,
        currentGridId: 2,
        grids: [currentGrid, newGrid, newestGrid],
      };
      const expectedState = {
        grid: currentGrid,
        currentGridId: 0,
        grids: [currentGrid, newGrid, newestGrid],
      };
      mutations[NEXT_GRID](state);

      expect(state.grid).to.deep.equal(expectedState.grid);
      expect(state.currentGridId).to.deep.equal(expectedState.currentGridId);
      expect(state.grids).to.deep.equal(expectedState.grids);
    });
  });

  describe('PREVIOUS_GRID', () => {
    const currentGrid = [[{ selected: '', shouldBe: 'tree' }]];
    const newGrid = [[{ selected: '', shouldBe: 'tent' }]];
    const newestGrid = [[{ selected: '', shouldBe: 'grass' }]];

    it('displays the previous grid', () => {
      const state = {
        grid: currentGrid,
        currentGridId: 1,
        grids: [newGrid, currentGrid, newestGrid],
      };
      const expectedState = {
        grid: newGrid,
        currentGridId: 0,
        grids: [newGrid, currentGrid, newestGrid],
      };

      mutations[PREVIOUS_GRID](state);
      expect(state.grid).to.deep.equal(expectedState.grid);
      expect(state.currentGridId).to.deep.equal(expectedState.currentGridId);
      expect(state.grids).to.deep.equal(expectedState.grids);
    });

    it('displays the last grid if there are no more preceeding grids', () => {
      const state = {
        grid: newGrid,
        currentGridId: 0,
        grids: [newGrid, currentGrid, newestGrid],
      };
      const expectedState = {
        grid: newestGrid,
        currentGridId: 2,
        grids: [newGrid, currentGrid, newestGrid],
      };

      mutations[PREVIOUS_GRID](state);
      expect(state.grid).to.deep.equal(expectedState.grid);
      expect(state.currentGridId).to.deep.equal(expectedState.currentGridId);
      expect(state.grids).to.deep.equal(expectedState.grids);
    });
  });

  describe('NAVIGATE', () => {
    const currentGrid = [[{ selected: '', shouldBe: 'tree' }]];
    const newGrid = [[{ selected: '', shouldBe: 'tent' }]];
    const newestGrid = [[{ selected: '', shouldBe: 'grass' }]];

    it('navigates to the correct grid', () => {
      const state = {
        grid: newestGrid,
        currentGridId: 2,
        grids: [newGrid, currentGrid, newestGrid],
      };
      const payload = { id: 1 };
      const expectedState = {
        grid: currentGrid,
        currentGridId: 1,
        grids: [newGrid, currentGrid, newestGrid],
      };

      mutations[NAVIGATE](state, payload);
      expect(state.grid).to.deep.equal(expectedState.grid);
      expect(state.currentGridId).to.deep.equal(expectedState.currentGridId);
      expect(state.grids).to.deep.equal(expectedState.grids);
    });
  });
});
