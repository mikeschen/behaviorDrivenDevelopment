describe('str', function() {
  it("removes spaces in text string", function() {
    expect(str.replace(/\s+/g, '')).to.equal("Hihowareyou!?");
  });

  it("removes puncuation from string", function(){
    expect(str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")).to.equal("Hihowareyou?");
  });

  it("removes puncuation from string", function(){
    expect(punct.replace(/\?/g,'')).to.equal("Hihowareyou");
  });

  it("sets all letters to lowercase", function(){
    expect(question.toLowerCase()).to.equal("hihowareyou");
  });

  it("finds square root of number of characters and round down", function(){
    expect(Math.round(Math.sqrt(lowerCase.length))).to.equal(3);
  });

  it("finds the next whole number from rounded square root", function(){
    expect(numberCol = numberRows + 1).to.equal(4);
  });

  it("puts characters in 5 letter arrays", function(){
    expect(characterArray).to.equal(["h", "i", "h", "o", "w", "a", "r", "e", "y", "o", "u"]);
  });

});
