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

const countLetters = function(word) {
  let results = {};
  for (let letter of word) {
    if (letter !== " " && !results[letter]) {
      results[letter] = 1;
    } else if (results[letter]) {
      results[letter] += 1;
    }
  }
  return results;
};

let result = (countLetters("lighthouse in the house"));

// TEST code
assertEqual(result['l'], 1);
assertEqual(result['i'], 2);
assertEqual(result['g'], 1);
assertEqual(result['h'], 4);
assertEqual(result['t'], 2);
assertEqual(result['o'], 2);
assertEqual(result['u'], 2);
assertEqual(result['s'], 2);
assertEqual(result['e'], 3);
assertEqual(result['n'], 1);
