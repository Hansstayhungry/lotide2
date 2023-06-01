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

const assertArraysEqual = function(arr1, arr2) {
  let result = "🛑🛑🛑 Assertion Failed:";
  if (eqArrays(arr1, arr2)) {
    result = "✅✅✅ Assertion Passed:";
    console.log(`${result} ${arr1} === ${arr2}`);
    return;
  }
  console.log(`${result} ${arr1} !== ${arr2}`);
};

// ACTUAL FUNCTION
const middle = function(array) {
  let middleElement = [];
  if (array.length === 1 || array.length === 2) {
    return middleElement;
  } else if (array.length % 2 === 1) {
    middleElement.push(array[(array.length - 1) / 2]);
  } else if (array.length % 2 === 0) {
    middleElement.push(array[(array.length) / 2 - 1]);
    middleElement.push(array[(array.length) / 2]);
  }
  return middleElement;
};

// test code
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]