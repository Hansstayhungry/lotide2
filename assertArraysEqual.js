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


// TEST
assertArraysEqual([1,2,3], [1,2,3]); // Should passed
assertArraysEqual([2], [4,5]); // should failed
assertArraysEqual([1,2,5], [1,2,3]); // Should failed
assertArraysEqual([], [1,2,3]); // Should failed