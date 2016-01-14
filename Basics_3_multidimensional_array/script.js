String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

var visitor = prompt("What's your name?");
visitor = visitor.toLowerCase();
document.write("<h1>Welcome "+ visitor.capitalize() +"!</h1>"); // Writes directly onto page

var qAndA = [
      ["Fill the blank: Andrew is in love with _______.", "stacey"],
      ["What is your name?", visitor],
      ["What number question is this (answer as a number)?", "3"],
      ["How many legs does an insect have (answer as a number)?", "6"],
      ["Isn't this cool? (yes/no)", "yes"],
      ["What is 5 x 5? (answer as a number)", "25"]
      ];

function askQuestion( qanda ){
  var results = [[], []];
  for (var i = 0; i < qanda.length; i ++){
    answer = prompt(qanda[i][0]);
    if (answer === qanda[i][1]){
      // Right
      results[0].push(qanda[i]);
    } else {
      // Wrong
      results[1].push([qanda[i][0], answer]);
    }
  }
  return results
}

function easyOrderedList( list ){
  var HTML = "<ol>";
  for (var i = 0; i < list.length; i ++){
    HTML += "<li>"+ list[i][0] +" Your answer: <b>"+ list[i][1] +"</b>.</li>";
  }
  HTML += "</ol>";
  return HTML;
}

function display( results ){
  var HTML;
  var correct;
  correct = results[0].length;
  HTML = "<p>You got " + correct + " question(s) right.</p>";
  if (results[0].length > 0){
    HTML += "<br><p>You got these questions <em>correct</em>.</p>";
    HTML += easyOrderedList(results[0]);
  }
  if (results[1].length > 0){
    HTML += "<p>You got " + results[1].length + " question(s) <em>wrong</em>.</p>";
    HTML += easyOrderedList(results[1]);
  }
  print(HTML);


}

function print(message){
  //document.write(message);
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

var results = askQuestion( qAndA );

display( results );




//Experimentation
/*
var student  = {
  name: "Dave"
  grades: [80, 85, 90, 95]
};
*/