var google = $('svg').drawsvg();

//Random Number Generator
var limit = 3;
var randNum = Math.floor(Math.random() * limit);
console.log(randNum);

//click on stage
$('#stage').click(function() {
  //animate stroke drawing
  google.drawsvg('animate');
  //grab the icons
  $target = $('.cls-2.icon');
  //apply randomized animation/color to the icons and reset 
  $target.removeClass('pulse' + randNum);
  setTimeout("$target.addClass('pulse'+randNum);", 100)
});