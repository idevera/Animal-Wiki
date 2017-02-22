$(document).ready(function() {
	$("button#redpanda").click(function() {
		$("#redpanda-show").show();
		$("#dingo-show").hide();
		$("#riverotter-show").hide();
	});

	$("button#dingo").click(function() {
		$("#dingo-show").show();
		$("#redpanda-show").hide();
		$("#riverotter-show").hide();
	});

	$("button#riverotter").click(function() {
		$("#riverotter-show").show();
		$("#redpanda-show").hide();
		$("#dingo-show").hide();
	});
});