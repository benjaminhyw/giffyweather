$(document).ready(function(){

  $("#location-form").on("submit", function(event){
    event.preventDefault();
    // $(this).hide('slow')

    var temp = $("#forecast-container").html()
    if ( _.range(100,150).includes(parseInt(temp))) {
      $("body").removeClass()
      $("body").addClass("volcano")
    } else if ( _.range(90,100).includes(parseInt(temp))){
      $("body").removeClass()
      $("body").addClass("on_fire")
    } else if ( _.range(80,90).includes(parseInt(temp))){
      $("body").removeClass()
      $("body").addClass("this_is_fine")
    } else if ( _.range(70,80).includes(parseInt(temp))){
      $("body").removeClass()
      $("body").addClass("beach")
    } else if ( _.range(60,70).includes(parseInt(temp))){
      $("body").removeClass()
      $("body").addClass("overcast")
    } else if ( _.range(50,60).includes(parseInt(temp))){
      $("body").removeClass()
      $("body").addClass("sweater_weather")
    } else if ( _.range(40,50).includes(parseInt(temp))){
      $("body").removeClass()
      $("body").addClass("cold")
    } else if ( _.range(30,40).includes(parseInt(temp))){
      $("body").removeClass()
      $("body").addClass("light_snow")
    } else if ( _.range(20,30).includes(parseInt(temp))){
      $("body").removeClass()
      $("body").addClass("avalanche")
    } else if ( _.range(-100,20).includes(parseInt(temp))){
      $("body").removeClass()
      $("body").addClass("freezing")
    }

    // $("#forecast-container").empty()
    // $("#forecast-container").html("howdy")
  })




});