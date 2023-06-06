const assertArraysEqual = require('../assertArraysEqual');

// TEST
assertArraysEqual([1,2,3], [1,2,3]); // Should passed
assertArraysEqual([2], [4,5]); // should failed
assertArraysEqual([1,2,5], [1,2,3]); // Should failed
assertArraysEqual([], [1,2,3]); // Should failed