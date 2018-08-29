$( document ).ready(function() {

$("#search-submit").on("click", function() {
    event.preventDefault();
    $("#nyt-dump").empty();
    var search = $("#term").val();
    var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=c43fdcb0dd074a0bb172684363bdf7bd";
    console.log(search);
    console.log(url);
    $.ajax({
    url: url,
    method: 'GET',
    }).then(function(result) {
    console.log(result);
    console.log(search);
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

  });
});
});