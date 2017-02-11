import { isSolved, getTentsInRow, getTentsInColumn, hasBeenEdited } from './game';

describe('game', () => {
  describe('#isSolved', () => {
    it('returns true if the given grid is solved', () => {
      const grid = [
        [{ selected: 'tent', shouldBe: 'tent' }, { selected: '', shouldBe: '' }],
        [{ selected: 'tree' }, { selected: 'tent', shouldBe: 'tent' }],
      ];
      expect(isSolved(grid)).to.equal(true);
    });

    it('returns false if the given grid is not solved', () => {
      const grid = [
        [{ selected: '', shouldBe: 'tent' }, { selected: '', shouldBe: '' }],
        [{ selected: 'tree' }, { selected: 'tent', shouldBe: 'tent' }],
      ];
      expect(isSolved(grid)).to.equal(false);
    });
  });

  describe('#getTentsInRow', () => {
    it('calculates the tents in a row correctly', () => {
      const input = [
        [{ selected: '', shouldBe: 'tent' }, { selected: '', shouldBe: '' }],
        [{ selected: 'tent', shouldBe: 'tent' }, { selected: '', shouldBe: 'tent' }],
      ];
      const expected = [
        { numSelected: 0, numShouldBe: 1 },
        { numSelected: 1, numShouldBe: 2 },
      ];
      expect(getTentsInRow(input)).to.deep.equal(expected);
    });
  });

  describe('#getTentsInColumn', () => {
    it('calculates the tents in a column correctly', () => {
      const input = [
        [{ selected: '', shouldBe: 'tent' }, { selected: '', shouldBe: '' }],
        [{ selected: 'tent', shouldBe: 'tent' }, { selected: '', shouldBe: 'tent' }],
      ];
      const expected = [
        { numSelected: 1, numShouldBe: 2 },
        { numSelected: 0, numShouldBe: 1 },
      ];
      expect(getTentsInColumn(input)).to.deep.equal(expected);
    });
  });

  describe('#hasBeenEdited', () => {
    it('calculates whether the grid has been edited correctly if it has not been', () => {
      const input = [
        [{ selected: '', shouldBe: 'tent' }, { selected: '', shouldBe: '' }],
        [{ selected: 'tree', shouldBe: 'tree' }, { selected: '', shouldBe: 'tent' }],
      ];
      expect(hasBeenEdited(input)).to.equal(false);
    });

    it('calculates whether the grid has been edited correctly if it has been', () => {
      const input = [
        [{ selected: 'tent', shouldBe: 'tent' }, { selected: '', shouldBe: '' }],
        [{ selected: 'tree', shouldBe: 'tree' }, { selected: '', shouldBe: 'tent' }],
      ];
      expect(hasBeenEdited(input)).to.equal(true);
    });
  });
});
