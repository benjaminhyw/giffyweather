$(document).ready(function(){

  $("#location-form").on("submit", function(event){
    event.preventDefault();
    $(this).hide('slow')

    var temp = $("#forecast-container").html()
    console.log(temp)

    if ( _.range(90,150).includes(parseInt(temp))) {
      $("body").removeClass()
      $("body").addClass("volcano")

      console.log("kinda but not really working")
    }

    // $("#forecast-container").empty()
    // $("#forecast-container").html("howdy")
  })




});