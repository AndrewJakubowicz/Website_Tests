
//1 Hide spoiler
$(".spoiler span").hide();
//2 Add a button
$(".spoiler").append("<button>Spoiler!</button>");
//3 When button pressed
$("button").click(function(){
  $('.spoiler span').show();
  $(this).remove();
});
  //3.1 Show spoiler
  //3.2 Get rid of button.