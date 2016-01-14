
var $overlay = $('<div id="overlay"></div>');
var $image_w_caption = $("<div id='pair'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

$image_w_caption.append($image);
$image_w_caption.append($caption);


$overlay.append($image_w_caption);

$("body").append($overlay);


// User will click on an image
$("#imageGallery a").click(function(event){
	// But if javascript isn't loaded for someone, it will work.
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	// Update overlay with the image linked in the link
	$image.attr("src", imageLocation);
	// Need to add src to the img tag.

	$overlay.fadeIn("fast");

	// Get childs alt attribute
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});

// Hides the lightbox
$overlay.click(function(){
	$(this).fadeOut("fast");
});
