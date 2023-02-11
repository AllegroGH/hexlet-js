/* eslint-disable */
import fill from '../src/fill.js';

// BEGIN (write your solution here)
let arr = [];

describe('first', () => {
  beforeEach(() => (arr = [1, 2, 3, 4, 5, 6]));

  test('fill 0', () => {
    expect(fill(arr, 'x', 0, 10)).toBe(arr);
  });

  test('fill 1', () => {
    expect(fill(arr, 'x', 0, 10)).toEqual(['x', 'x', 'x', 'x', 'x', 'x']);
  });

  test('fill 2', () => {
    expect(fill(arr, 'x', 0, 1)).toEqual(['x', 2, 3, 4, 5, 6]);
  });

  test('fill 3', () => {
    expect(fill(arr, 'x', 5, 10)).toEqual([1, 2, 3, 4, 5, 'x']);
  });

  test('fill 4', () => {
    expect(fill(arr, 'x', 0)).toEqual(['x', 'x', 'x', 'x', 'x', 'x']);
  });

  test('fill 5', () => {
    expect(fill(arr, 'x', 10)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('fill 6', () => {
    expect(fill(arr, 'x')).toEqual(['x', 'x', 'x', 'x', 'x', 'x']);
  });
});

// END
