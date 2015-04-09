// var win_y = $(window).height();
var winY = $(window).height();
var nextPageToken;

$(document).ready(function(){

	$('#hero').css("height", winY);
	$.ajax({
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet"
  									+"&q=astrology"
  									+"&maxResults=3"
                    +"&order=relevance"
                    +"&type=video"
                    +"&videoEmbeddable=true"
                    +"&key=AIzaSyAh38PqfNFaKlVU7gZcFQFFO3hTdrmOdcs",
  success: function(data){
  	nextPageToken = data.nextPageToken;
  	for (var i = 0; i < data.items.length; i++) {
  		console.log(data.items[i].snippet.title)
  	};
  }
})
});

$('#more_videos').click(function(){
	$.ajax({
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet"
  									+"&q=astrology"
  									+"&maxResults=3"
                    +"&order=relevance"
                    +"&type=video"
                    +"&videoEmbeddable=true"
                    +"&pageToken="+nextPageToken
                    +"&key=AIzaSyAh38PqfNFaKlVU7gZcFQFFO3hTdrmOdcs",
  success: function(data){
  	nextPageToken = data.nextPageToken
  	for (var i = 0; i < data.items.length; i++) {
  		console.log(data.items[i].snippet.title)
  	};
  }
})
})