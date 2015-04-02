$(document).ready(function(){
  window.animals = [];

  $(".addAnimalButton").on("click", function(event){
    
    var animalMakerFunctionName = $(this).data("animal-maker-function-name");

    // get the maker function for the kind of animal we're supposed to make
    var animalMakerFunction = window[animalMakerFunctionName];

    // make a animal with a random position

    var animal = new animalMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(animal.$node);
      window.animals.push(animal);
    }
  });
 
  var detectCollisions = function() {
    for (var i = 0; i < window.animals.length; i++) {
      var animal = window.animals[i];
      var animalPosition = animal.$node.position();
  };
  setInterval(detectCollisions,1);
});

