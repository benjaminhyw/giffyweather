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
    } else if (_.range(80,90).includes(parseInt(temp))){
      
      $("body").removeClass()
      $("body").addClass("this_is_fine")

      console.log("this_is_fine")
    } else if (_.range(70,80).includes(parseInt(temp))){
      
      $("body").removeClass()
      $("body").addClass("beach")

      console.log("beach")
    } else if (_.range(60,70).includes(parseInt(temp))){
      
      $("body").removeClass()
      $("body").addClass("overcast")

      console.log("overcast")
    } else if (_.range(50,60).includes(parseInt(temp))){
      
      $("body").removeClass()
      $("body").addClass("sweater_weather")

      console.log("sweater_weather")
    } else if (_.range(40,50).includes(parseInt(temp))){
      
      $("body").removeClass()
      $("body").addClass("cold")

      console.log("cold")
    } else if (_.range(30,40).includes(parseInt(temp))){
      
      $("body").removeClass()
      $("body").addClass("light_snow")

      console.log("light_snow")
    } else if (_.range(20,30).includes(parseInt(temp))){
      
      $("body").removeClass()
      $("body").addClass("avalanche")

      console.log("avalanche")
    } else if (_.range(-100,20).includes(parseInt(temp))){
      
      $("body").removeClass()
      $("body").addClass("freezing")

      console.log("freezing")
    }

    // $("#forecast-container").empty()
    // $("#forecast-container").html("howdy")
  })




});