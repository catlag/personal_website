// var win_y = $(window).height();
var winY = $(window).height();
var nextPageToken;
var thumbnails

$(document).ready(function(){

	$('#hero').css("height", winY);
	$.ajax({
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet"
  									+"&q=astronomy|planets"
  									+"&maxResults=3"
                    +"&order=relevance"
                    +"&type=video"
                    +"&videoEmbeddable=true"
                    +"&key=AIzaSyAh38PqfNFaKlVU7gZcFQFFO3hTdrmOdcs",
  success: function(data){
  	nextPageToken = data.nextPageToken;
  	for (var i = 0; i < data.items.length; i++) {
  		vidId = data.items[i].id.videoId
  		thumbnails = data.items[i].snippet.thumbnails.medium.url
  		var title = data.items[i].snippet.title
  		$('#results').append("<li><p style='display:none;'>"+vidId+"</p><img src='"+thumbnails+"'</img><a>"
  		 +title+ "</a><h1>X</h1></li>")
  	};
  	addListener();
  }
})
});

$('#more_videos').click(function(){
		$.ajax({
		  url: "https://www.googleapis.com/youtube/v3/search?part=snippet"
		  									+"&q=astronomy|planets"
		  									+"&maxResults=3"
		                    +"&order=relevance"
		                    +"&type=video"
		                    +"&videoEmbeddable=true"
		                    +"&pageToken="+nextPageToken
		                    +"&key=AIzaSyAh38PqfNFaKlVU7gZcFQFFO3hTdrmOdcs",
		  success: function(data){
		  	nextPageToken = data.nextPageToken
		  	for (var i = 0; i < data.items.length; i++) {
		  		vidId = data.items[i].id.videoId
		  		thumbnails = data.items[i].snippet.thumbnails.medium.url
		  		var title = data.items[i].snippet.title
		  		$('#results').append("<li><p style='display:none;'>"+vidId+"</p><img src='"+thumbnails+"'</img><a>"
  		 			+title+ "</a><h1>X</h1></li>")
  					};
		  	addListener();
		  }
		})
})

addListener = function(){
	var video;
	$('#results').each(function(i,el){
		$(this).children().children("img, a").click(function(){
			video = $(this).siblings("p").html();
				$('html, body').animate({
		        scrollTop: $("#personal").offset().top
		    }, 500);
				$("iframe").attr("src","https://www.youtube.com/embed/"+video+"?controls=0&amp;showinfo=0")
		});
		$(this).children().children("h1").click(function(){
			$(this).parents("li").remove()
		});
		$(this).children().children().hover(function(){
	      $('html,body').css('cursor','pointer');
	    },
	    function(){
	      $('html,body').css('cursor','auto');
	    })
})
};



