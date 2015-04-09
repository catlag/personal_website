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
  		// console.log(data.items[i])
  		thumbnails = data.items[i].snippet.thumbnails.medium.url
  		var title = data.items[i].snippet.title
  		$('#results').append("<li><img src='"+thumbnails+"'</img><a>"
  		 +title+ "</a></li>")
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
		  		console.log(data.items[i].snippet.thumbnails.medium.url)
		  		thumbnails = data.items[i].snippet.thumbnails.medium.url
		  		var title = data.items[i].snippet.title
		  				$('#results').append("<li><img src='"+thumbnails+"'</img><a>"
		  		 +title+ "</a></li>")
		  	};
		  	addListener();
		  }
		})
})

addListener = function(){
	$('#results').each(function(i,el){
	$(this).children().children().click(function(){
		alert("hello")
	});
	$(this).children().children().hover(function(){
      $('html,body').css('cursor','pointer');
    },
    function(){
      $('html,body').css('cursor','auto');
    })
})
};



