"use strict";

$(document).ready( () => {
	// preload images
	$("#image_list a").each( (index, element) => {
		const swappedImage = new Image();
		swappedImage.src = $(element).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click( evt => {
		const link = evt.currentTarget;
				
		$("#image,#caption").fadeOut(1000,
			() => {
			const imageURL = $(link).attr("href");
			$("#image").attr("src", imageURL);
				
			const caption = $(link).attr("title");
			$("#caption").text(caption);
		
			$("#image,#caption").fadeIn(1000);

			});
		

		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready