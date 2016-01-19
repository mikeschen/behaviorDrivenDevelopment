describe('isTriangle', function() {
  it("determines if 3 sides create a valid triangle", function() {
    expect(isTriangle(2, 2, 4)).to.equal(false)
  });

  it("determines if 3 sides creat a valid triangle", function() {
    expect(isTriangle(2, 2, 2)).to.equal(true)
  });
})

describe('triangleType', function() {
  it("is equilateral when all sides are equal", function() {
    expect(triangleType(2, 2, 2)).to.equal("an equilateral")
  });

  it("is isoceles when two of the three sides are equal", function() {
    expect(triangleType(2, 2, 3)).to.equal("an isoceles")
  });

  it("is scalene when no sides are equal", function() {
    expect(triangleType(2, 3, 4)).to.equal("a scalene")
  });
})

describe('triangle', function(){
  it("is equilateral when all sides are equal", function() {
    expect(triangle(2, 3, 4)).to.equal("a scalene")
  });
  it("determines if 3 sides create a valid triangle", function() {
    expect(triangle(2, 2, 400)).to.equal("is not")
    });
  })
