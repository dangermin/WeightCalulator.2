var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];
// Populate the dropdown element with the data found in the planets array.
var selectDiv = document.getElementById("planets");
//Create and append the options
for (var i = 0; i < planets.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", planets[i][1]);
    option.text = planets[i][0];
    selectDiv.appendChild(option);
}

function calculateWeight(weight, planetName) {
  var usersWeight = $('#user-weight').val();
  var planetName = $('select#planets option:selected').text();
  var planetWeight = $('select#planets').val();
  var result = (usersWeight * planetWeight);
  // 6. Write code to display the message shown in the screenshot.
    if (!isNaN(result)){
      // document.getElementById("output").innerHTML="If you were on "+planetName+", you would weigh "+result+"lbs!"
      $('#output').text("If you were on "+planetName+", you would weigh "+result+"lbs!");
		}
		else {
	  	$('#output').text("Not a valid input. Please enter weight and select a planet.");
    }
}

function handleClickEvent() {
  $('#calculate-button').click(function(){
  calculateWeight();
  });
}
$(document).ready(handleClickEvent);

// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.

$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.hero').css('top',-(scrolled*0.0315)+'rem');
  $('.hero > h1').css('top',-(scrolled*-0.005)+'rem');
  $('.hero > h1').css('opacity',1-(scrolled*.00175));
};


//Alternate method to populate Select
// 1. Populate the dropdown element with the data found in the planets array.
// var option = '';
// for (var i=0; i<planets.length; i++){
//   var nameOption = planets[i][0];
//   var weightOption = planets[i][1];
//   // document.createElement("option");
//    option += '<option id="'+nameOption+'" value="'+weightOption+'">' + nameOption + '</option>';
// }
// $('#planets').append(option);
