var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while ( true ) {
	search = prompt("Search for a product in our store. Type 'list' to show " + 
		"all of the produce and 'quit' to exit.")
	search = search.toLowerCase();
	console.log(search);
	if (search === 'quit'){
		print( "I hope you had a pleasant experience :)")
		break;
	} else if (search == 'list'){
		print( inStock.join(', '));
	} else {
		if ( inStock.indexOf(search) > -1 ) {
			print('Yes, we have '+ search + ' in the store.');
		} else {
			print( search.capitalize() + ' is not in stock.');
		}
	}
}
