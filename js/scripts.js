$(document).ready(function() {
  $("#things form").submit(function(event) {
    var things = ["animal", "band", "color", "clothing", "day", "season"];

    things.forEach(function(thing) {
      var userInput = $("input#" + thing).val();
      $("." + thing).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});



    // var animal = $('#animal').val();
    // var band = $('#band').val();
    // var color = $('#color').val();
    // var clothing = $('#clothing').val();
    // var day = $('#day').val();
    // var season = $('#season').val();
    // var array1 = [animal, color, band, clothing, day, season];
    //
    // var array5 = array1.slice(0,3);
    // // console.log(array1[0,3]);
    // // console.log(array2);
    // // console.log(array4);
    // console.log(array5);
    //
    // event.preventDefault();
//   });
// });
