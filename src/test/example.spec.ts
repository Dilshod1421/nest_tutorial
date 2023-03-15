import { sum } from './example';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('1 + 2 != 4', () => {
  expect(sum(1, 2)).not.toBe(4);
});
