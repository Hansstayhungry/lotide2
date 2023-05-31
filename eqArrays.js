// Function implementation
const assertEqual = function(actual, expected) {
  let result = "🛑🛑🛑 Assertion Failed:";
  if (actual === expected) {
    result = "✅✅✅ Assertion Passed:";
    console.log(`${result} ${actual} === ${expected}`);
    return;
  }

  console.log(`${result} ${actual} !== ${expected}`);
};

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


// Test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should Fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), true); // => should Fail