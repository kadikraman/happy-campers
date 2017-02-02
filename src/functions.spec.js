import { getTentsInRow } from './functions';

describe('App', () => {
  describe('#getTentsInRow', () => {
    it('calculates the tents in a row correctly', () => {
      const input = [
        [{ shouldBe: 'tent' }, { shouldBe: '' }],
        [{ shouldBe: 'tent' }, { shouldBe: 'tent' }],
        [{ shouldBe: '' }, { shouldBe: '' }],
        [{ shouldBe: 'tent' }, { shouldBe: 'tent' }],
      ];
      const expected = [1, 2, 0, 2];
      expect(getTentsInRow(input)).to.deep.equal(expected);
    });
  });
});
