function loading(){
	$('.fadein').each(function (i) {
		var bottom_of_object = $(this).position().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		/* If the object is completely visible in the window, fade it it */
		if (bottom_of_window-50 > bottom_of_object) {
			$(this).animate({
			'opacity': '1'
			}, 1200);
		}
	});
}

// Will this work?
$(window).scroll(function () {
	/* Check the location of each desired element */
	loading();
});
$(document).ready(loading);
