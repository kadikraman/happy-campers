import mutations from './mutations';
import { TOGGLE, RESET, SHOW_ANSWERS } from './mutationTypes';

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
});
