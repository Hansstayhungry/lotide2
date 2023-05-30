// Function implementation
const head = function(arr) {
  return arr[0];
}


const assertEqual = function(actual, expected) {
  let result = "🛑🛑🛑 Assertion Failed:";
  if (actual === expected) {
    result = "✅✅✅ Assertion Passed:";
    console.log(`${result} ${actual} === ${expected}`);
    return;
  }

  console.log(`${result} ${actual} !== ${expected}`);
};

// //TEST
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "hello");