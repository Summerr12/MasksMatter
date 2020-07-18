const display = $(".description");
const img = $(".example");
$(".circle img").hover(function() {
	let current = $(this).clone();
	display.html(`My name is ${current.attr("data-name")} and I am the ____ of Mask Matters. I am also a ______. As a hobby, I like to suffer.`);
	let clone = current.clone();
	$(".center").remove();
	current.addClass("center");
	img.prepend(current);
});
