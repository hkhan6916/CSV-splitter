var splitter = require("../csv-splitter");
var assert = require("chai").assert;
var expect = require("chai").expect;
var glob = require("glob");
var fs = require("fs");

const cleanup = () => {
  glob("output-*.csv", (er, files) => files.map(file => fs.unlinkSync(file)));
};

describe("Array Test", () => {
  afterEach(() => {
    cleanup();
  });

  it("should have generated the correct number of files", () => {
    splitter.splitter("test/files/test.csv");
    glob("output-*.csv", (er, files) => assert.equal(files.length, 3));
  });

  it("should return some value", () => {
    splitter.splitter("test/files/test.csv");
    glob("output-*.csv", (er, files) => expect(files.length).to.be.at.least(1));
  });
});
