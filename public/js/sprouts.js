// var pageNum = 1;
//
// $(".more-sprouts").on("click", function(event) {
//   event.preventDefault();
//   pageNum++;
//
//   var request = $.ajax({
//     method: "GET",
//     url: "/tweets.json?page=" + pageNum,
//   });
//
//   request.done(function(data) {
//     data.forEach(function(tweet) {
//       $(".tweets").append('<li class="tweet"> <div class="body">' + tweet.text + '</div> <div class="user">' + tweet.username + "</div> </li>");
//     });
//     $("a").attr("href", "/tweets?page=" + (pageNum+1) );
//   });
//
// });
var pageNum = 1;
$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    pageNum++;
    var request = $.ajax({
      method: "GET",
      url: "/tweets.json?page=" + pageNum,
    });

    request.done(function(data) {
      data.forEach(function(tweet) {
        $(".tweets").append('<li class="tweet"> <div class="body">' + tweet.text + '</div> <div class="user">' + tweet.username + "</div> </li>");
      });
    });
  }
});
