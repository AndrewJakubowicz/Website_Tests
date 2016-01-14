//Problem: Looks crap when it is small
//Solution: Hide text links and swap them out with appropriate navigation.

// Create a select and append to menu
var $select = $("<select></select>");
$('#menu').append($select);
//Cycle over menu links
$('#menu a').each(function(){
	var $anchor = $(this);
	//Create an option
	var $option = $("<option></option>");
	// Deal with selected options
	if ($anchor.parent().hasClass("selected")){
		$option.prop( "selected", true); // coincidence that these are the same (selected)
	}
	//option's value is the href
	$option.val($anchor.attr("href"));
	//option's text is the text of link
	$option.text($anchor.text());
	//append option to select
	$select.append($option);
});



$select.change(function(){
	//Bind click to go to select's location
	window.location = $select.val()
	//Modify Css to hide links on small width and show button and select
	//Also hides select and button on larger widths and shows links.
})
