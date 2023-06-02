const assertEqual = function(actual, expected) {
  let result = "🛑🛑🛑 Assertion Failed:";
  if (actual === expected) {
    result = "✅✅✅ Assertion Passed:";
    console.log(`${result} ${actual} === ${expected}`);
    return;
  }

  console.log(`${result} ${actual} !== ${expected}`);
};

const findKeyByValue = function(obj, value) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === value) {
      return key;
    }
  }
};


// TEST
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);