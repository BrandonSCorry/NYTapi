$( document ).ready(function() {

$("#search-submit").on("click", function() {
    event.preventDefault();
    $("#nyt-dump").empty();
    var search = $("#term").val();
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "c43fdcb0dd074a0bb172684363bdf7bd",
    'q': search
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
    var search_results = result.response.docs;

    for (var i = 0; i < search_results.length; i++){
      var div = $("<div>");
      var p = $("<p>");
      var headline = search_results[i].headline.main;
      var snippet = search_results[i].snippet;
      console.log(headline);




      $("#nyt-dump").append("<strong>" + headline + "</strong>" + "<br>");
      $("#nyt-dump").append(snippet + "<br>" + "<br>");
    }
  }).fail(function(err) {
    throw err;
  });    console.log(search);
    console.log(url);


  });
});