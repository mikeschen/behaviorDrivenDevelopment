describe('triangle', function() {
  it("is false when sum of 2 sides is <= the 3rd side", function() {
    expect(triangle(2, 2, 4)).to.equal(false);
  });

  it("is equilateral when all sides are equal", function() {
    expect(triangle(2, 2, 2)).to.equal("equilateral");
  });

  it("is isoceles when two of the three sides are equal", function() {
    expect(triangle(2, 2, 3)).to.equal("isoceles");
  });

  it("is scalene when no sides are equal", function() {
    expect(triangle(2, 3, 4)).to.equal("scalene");
  });
});
