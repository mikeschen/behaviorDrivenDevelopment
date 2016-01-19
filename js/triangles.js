

var triangle = function(x, y, z) {
  if (x + y <= z || y + z <= x || x + z <= y){
    return "not a";
  } else if (x === y && y === z) {
    return "an equilateral";
  } else if (x === y || y === z || z === x) {
    return "an isoceles";
  } else
    return "a scalene";
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var x = parseInt($("input#x").val());
    var y = parseInt($("input#y").val());
    var z = parseInt($("input#z").val());

    var results = triangle(x,y,z);
    console.log('test');

    // if (!result) {
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }
    $("span#kind").text(results);
    $("#result").show();
    event.preventDefault();
    });

  });
