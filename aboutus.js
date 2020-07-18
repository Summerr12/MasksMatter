const display = $(".description");
const img = $(".example");
$(".circle img").hover(function() {
	let current = $(this).clone();
	if (!current.attr("data-name")) return;
	display.html(` My name is ${current.attr("data-name")}. I am the ${current.attr("data-role")}`);
	let clone = current.clone();
	$(".center").remove();
	current.addClass("center");
	img.prepend(current);
});
