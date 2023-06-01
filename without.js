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



const without = function(words, wordsToRemove) {
  //filter use callback
  let filteredWords = words.filter(word => !wordsToRemove.includes(word));
  return filteredWords;
};

// TEST code for verify original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//TEST code
console.log(without(words, ["lighthouse"])); // -> should return ["hello", "world"];
console.log(without(words, ["lighthouse", "world"])); // -> should return ["hello", "world"]