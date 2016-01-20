var str = "Hi how are you!?";
str = str.replace(/\s+/g, '');
var punct = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
var question = punct.replace(/\?/g,'');
var lowerCase = question.toLowerCase();
var numberRows = Math.round(Math.sqrt(lowerCase.length));
var numberCol = numberRows +1;
var characterArray = lowerCase.split('');


for (j=0; j<5; j++) {
  var x = 0;
  for (i=1; i<5; i++) {

    var code = characterArray.splice(x, 1);
    x = x+2;
    console.log(code);
  }
  x = x-1;
}
