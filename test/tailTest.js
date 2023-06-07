const assert = require('chai').assert;
const tail = require('../tail');

// Tail array to pass in
const tailResult = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("ensure we get back two elements", () => {
    assert.strictEqual(tailResult.length, 2);
  });

  it("ensure first element is 'Lighthouse'", () => {
    assert.strictEqual(tailResult[0], "Lighthouse"); 
  });

  it("ensure second element is 'Labs'", () => {
    assert.strictEqual(tailResult[1], "Labs"); 
  });

});