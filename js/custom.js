$(function() {
	$('.news:last').css('border-bottom','0px');
	$('.pathway li:last').css('background-image','none');
	$('.slider').mobilyslider({
        transition: 'fade',
        animationSpeed: 800,
        bullets: true,
        arrowsHide: false
    });
	$("select").selectBox();
	$("#thumbnail li a").click(function(){
	$("#large img").hide().attr({"src": $(this).attr("href")});
	return false;
	});
	$("#large>img").load(function(){$("#large>img:hidden").fadeIn("fast")});
});