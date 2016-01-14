document.write("<h1>Welcome to my basic Javascript!</h1>"); // Writes directly onto page
var visitor = prompt("What's your name?");

function getRandomNumber() {
  var randomNumber = Math.floor( Math.random() * 6) + 1;
  return randomNumber;
}

var playList = [
      "FunnySong",
      "Sad Song",
      "Studio Killers",
      "Lady Gaga"
      ];

function print(message){
  document.write(message);
}

function printList( list ) {
  var listHTML = '<ol>';
  for (var i = 0; i < list.length; i += 1) {
    listHTML += '<li>'+list[i]+'</lis>';
  }
  listHTML += '</ol>';
  print(listHTML)
}

printList(playList);