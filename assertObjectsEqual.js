const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If the values are arrays, call eqArrays to compare them
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      // If the values are not arrays, compare them directly
      return false;
    }
  }

  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    // without inspect 'util'
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const actual =  { a: '1', b: 2, c: [3, 4]};
const expected = { b: 2, a: '1', c: [3, 4]};

assertObjectsEqual(actual, expected);