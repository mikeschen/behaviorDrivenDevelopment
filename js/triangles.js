var triangle = function(x, y, z){
  if (isTriangle(x, y, z)){
    return triangleType(x, y, z)
  } else {
    return "is not";
  }
};

var isTriangle = function(x, y, z) {
  return x + y > z && y + z > x && x + z > y
}

var triangleType = function(x, y, z) {
  if (x === y && y === z) {
    return "an equilateral";
  } else if (x === y || y === z || z === x) {
    return "an isoceles";
  } else {
    return "a scalene";
  }
}

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var x = parseInt($("input#x").val());
    var y = parseInt($("input#y").val());
    var z = parseInt($("input#z").val());

    var results = triangle(x,y,z);


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
