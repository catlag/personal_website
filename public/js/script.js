// var win_y = $(window).height();
var winY = $(window).height();
var winX = $(window).width();
var nextPageToken;
var thumbnails

$(document).ready(function(){
  //changes the height of sections based on screen width
	$('#hero').css("height", winY);
  console.log("hero");
  alert($('body').position().top);
  alert($('body').position().left);
  // $('#hero').css("top", "0px");
  // $('#hero').css("left", "0px");
	$('#columns').css("height", winY);
  $( "#contact img" ).each( function() {
        var $img = $( this );
        $img.width( winX * .03 );
      });

  if(parseInt(screen.width) < 1000) {
	 $('.projectImg').css("height", winY);
   // $('#row2').css("height", winY*.8);
   $('#bottom').css("height", winY);

   $('.github').attr("src", "/assets/github_black.svg")
   $('#phone > a ').html('<img src="/assets/phone.svg">');

    }else{
      $('#javascript').css("height", winY);
      
    };
});

//animation for project information on hover
if (parseInt(screen.width) > 1000){
  $(".projectImg").hover(function(){
  	$(this).find('div').animate({
      opacity: 1,
    }, 1000, function() {
      console.log("complete")
    })
  },function(){
  	$(this).find('div').animate({
      opacity: 0,
    }, 1000, function() {
      console.log("complete")
    })
  }
)};



//scrolls down page on arrow click
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
        scrollTop: $("#grubber").offset().top
    }, 1000);
  });
$('#arrow4').click(function(){
     $('html, body').animate({
        scrollTop: $("#sketchphrase").offset().top
    }, 1000);
  });
$('#arrow5').click(function(){
     $('html, body').animate({
        scrollTop: $("#adventure").offset().top
    }, 1000);
  });
$('#arrow6').click(function(){
	   $('html, body').animate({
        scrollTop: $("#bottom").offset().top
    }, 1000);
	});


