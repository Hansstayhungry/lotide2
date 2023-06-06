const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  let result = "🛑🛑🛑 Assertion Failed:";
  if (eqArrays(arr1, arr2)) {
    result = "✅✅✅ Assertion Passed:";
    console.log(`${result} ${arr1} === ${arr2}`);
    return;
  }
  console.log(`${result} ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;