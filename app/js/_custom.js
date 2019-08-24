$(document).ready(function(){

	$("video").delay(8000).fadeOut('slow');

	$("header").removeClass("main-head").delay(8000).queue(function(){
    	$(this).addClass("main-head").dequeue();
	});

    $(".description").delay(9000).fadeIn(2000);

    $("body").css("height", "2000px");

	$("header").removeClass("no-before").queue(function(){
    	$(this).addClass("no-before").dequeue();
	});

});
document.addEventListener("DOMContentLoaded", function() {

	// Custom JS

});
