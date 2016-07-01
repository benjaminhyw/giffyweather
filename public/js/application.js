$(document).ready(function(){

  $("#location-form").on("submit", function(event){
    event.preventDefault();
    // $(this).hide('slow')

    var temp = $("#forecast-container").html()
    console.log(temp)

    if ( _.range(100,150).includes(parseInt(temp))) {
      $("body").removeClass()
      $("body").addClass("volcano")

      console.log("volcano")
    } else if (_.range(90,100).includes(parseInt(temp))){
      
      $("body").removeClass()
      $("body").addClass("on_fire")

      console.log("on_fire")

    }

    // $("#forecast-container").empty()
    // $("#forecast-container").html("howdy")
  })




});