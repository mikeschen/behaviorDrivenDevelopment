describe('triangle', function() {
  it("is false when sum of 2 sides is <= the 3rd side", function() {
    expect(triangle(2, 2, 4)).to.equal(false);
  });
});
