const assertEqual = function(actual, expected) {
  let result = "🛑🛑🛑 Assertion Failed:";
  if (actual === expected) {
    result = "✅✅✅ Assertion Passed:";
    console.log(`${result} ${actual} === ${expected}`);
    return;
  }

  console.log(`${result} ${actual} !== ${expected}`);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let nameCount = {};
  for (let name of allItems) {
    if (itemsToCount[name]) {
      if (!nameCount[name]) {
        nameCount[name] = 1;
      } else {
        nameCount[name] += 1;
      }
    };
  }
  return nameCount;
}

// TEST code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);