/*
var person = {
  name : 'Sarah',
  country : 'US',
  age: 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

var message = '<p>Hello. My name is ' + person.name +'.</p>';
message += '<p>I live in the ' + person.country + '.</p>';
print(message);
*/

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}


function print(message){
  var div = document.getElementById('output');
  div.innerHTML = message;
}

function UnorderedList( list ){
  var tempstring;
  for (var key in list){
    if (key === 'name'){
      var HTML = "<h2>"+ list[key] +"</h2><ul>";
    } else {
      HTML += "<li>"+ key.capitalize() +": "+ list[key] +"</li>";
    }
  }
  HTML += "</ul>";
  return HTML
}

function grabArray(object){
  var HTML = "<div>";
  for (var i = 0; i < object.length; i ++){
    HTML += UnorderedList(object[i]);
  }
  HTML += "</div>";
  print(HTML);
}

var students = [
  {
    name: 'Sandy',
    track: 'Arts',
    achievements: '12',
    points: '150'
  },
  {
    name: 'Jordan',
    track: 'Music',
    achievements: '40',
    points: '130'
  },
  {
    name: 'Ahmed',
    track: 'Maths',
    achievements: '70',
    points: '125'
  },
  {
    name: 'Rachel',
    track: 'Choir',
    achievements: '15',
    points: '80'
  },
  {
    name: 'Bill',
    track: 'Science',
    achievements: '40',
    points: '95'
  }
];

grabArray(students);