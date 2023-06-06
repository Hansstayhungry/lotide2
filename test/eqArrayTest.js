const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// Test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should Fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), true); // => should Fail