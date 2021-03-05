'use strict';

const mergeSort = require('./mergeSort.js');

describe(mergeSort, () => {
    it('A function that sorts an array from the middle.', () => {
    let str = insertionSort([8,4,23,16,15]);
    expect(str).toBe([4,8,15,16,23]);
  }
    )});
