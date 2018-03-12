$(document).ready(function(){ 

	$(".answer").hide();

	$("h2").click(function(){
		if ($(this).next('.answer').is(':hidden')){

			$(this).next('.answer').slideDown();
			$(this).find("img").attr("src","images/close.png");

		} else {
			$(this).next('.answer').slideUp();
			$(this).find("img").attr("src","images/open.png");
		}
	})
})