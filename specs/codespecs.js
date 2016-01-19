describe('isTriangle', function() {
  it("determines if 3 sides create a valid triangle", function() {
    expect(isTriangle(2, 2, 4)).to.equal(false)
  });

  it("determines if 3 sides creat a valid triangle", function() {
    expect(isTriangle(2, 2, 2)).to.equal(true)
  });
})
