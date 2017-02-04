import mutations from './mutations';
import { TOGGLE } from './mutationTypes';

describe('mutations', () => {
  describe('TOGGLE', () => {
    it('toggles a grass tile correctly', () => {
      const state = {
        grid: [[{ selected: '' }, { selected: 'grass' }]],
      };
      const payload = { row: 0, column: 1 };
      mutations[TOGGLE](state, payload);
      expect(state.grid).to.deep.equal([[{ selected: '' }, { selected: 'tent' }]]);
    });

    it('toggles empty tiles correctly', () => {
      const state = {
        grid: [[{ selected: '' }, { selected: '' }]],
      };
      const payload = { row: 0, column: 1 };
      mutations[TOGGLE](state, payload);
      expect(state.grid).to.deep.equal([[{ selected: '' }, { selected: 'grass' }]]);
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
});
