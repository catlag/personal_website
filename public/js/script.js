// var win_y = $(window).height();
var winY = $(window).height();
var nextPageToken;
var thumbnails

$(document).ready(function(){

	$('#hero').css("height", winY);
	$('#columns').css("height", winY);
	$('#javascript').css("height", winY);
});

$(".projectImg").hover(function(){
	$(this).find('p').animate({
    opacity: 1,
  }, 1000, function() {
    console.log("complete")
  })
},function(){
	$(this).find('p').animate({
    opacity: 0,
  }, 1000, function() {
    console.log("complete")
  })
}
);

$('#arrow1').click(function(){
	   $('html, body').animate({
        scrollTop: $("#columns").offset().top
    }, 1000);
	});
$('#arrow2').click(function(){
	   $('html, body').animate({
        scrollTop: $("#javascript").offset().top
    }, 1000);
	});
$('#arrow3').click(function(){
	   $('html, body').animate({
        scrollTop: $("#bottom").offset().top
    }, 1000);
	});


