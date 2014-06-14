$(document).ready(function(){
	$(".ringTwo").click(function(e){

		var target = $(e.target);
		console.log(target.parents())
	});
});