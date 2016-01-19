describe('leapYear', function() {
  it("is false for a year that is not divisable by 4, 100, 400", function() {
    expect(leapYear(1993)).to.equal(false);
  });
  it("is true for years divisible by 4", function(){
    expect(leapYear(2004)).to.equal(true);
  });
  it("is false for years divisible by 100", function(){
    expect(leapYear(2100)).to.equal(false);
  });
  it("is true for years divisible by 400", function(){
    expect(leapYear(2000)).to.equal(true);
  });
});