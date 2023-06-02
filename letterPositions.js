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


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " " && !results[sentence[i]]) {
      results[sentence[i]] = [i];
    } else if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

// TEST code
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
