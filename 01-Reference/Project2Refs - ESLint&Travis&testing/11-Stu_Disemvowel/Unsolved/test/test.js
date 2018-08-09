var expect = require("chai").expect;
var disemvowel = require("../disemvowel");

describe("Disemvowel", function() {
  it("should remove all vowels from lowercase strings", function() {
    expect(disemvowel("this is lowercase")).to.equal("ths s lwrcs");
  });

  // what other tests cases could we write to test disemvowel?
});
