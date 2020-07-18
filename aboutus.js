const display = $(".description");
const img = $(".example");
$(".circle img").hover(function() {
	let current = $(this).clone();
	current.css("position", "relative");
	display.html(`My name is ${current.attr("data-name")} and I am the ${current.attr("data-role")} of Mask Matters.`);
	let clone = current.clone();
	$(".center").remove();
	current.addClass("center");
	img.prepend(current);
});
