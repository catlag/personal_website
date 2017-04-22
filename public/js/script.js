// var win_y = $(window).height();
var winY = $(window).height();
var winX = $(window).width();
var nextPageToken;
var thumbnails;



$(document).ready(function(){
  //changes the height of sections based on screen width
	$('#hero').css("height", winY);
  $('#hero').css("width", winX);
  $('#columns').css("height", winY);
  $('#bottom').css("height", winY/3);

  $('#main-border-rec').css("height", (winY*.90));
  $('#main-border-rec').css("width", (winX *.90));

  $('#hero').css("top", "0px");
  $('#hero').css("left", "0px");


  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('#bottom').css("height", winY);

    $('.github').attr("src", "/assets/github_black.svg");
    $('#phone > a ').html('<img src="/assets/phone.svg">');
      $( "#contact img" ).each( function() {
        var $img = $( this );
        $img.width( winX *.1);
      });
  } else{
      // $('#javascript').css("height", winY);
        $( "#contact img" ).each( function() {
        var $img = $( this );
        $img.width( winX *.06);
      });
      
    }

});

$(".menu-links").click(function(){
    var id = $(this).attr('name')
    $('html, body').animate({
        scrollTop: $("#"+id).offset().top
    }, 1000);
 });

