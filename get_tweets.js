// var index = streams.home.length - 1;
// var $body = $('body');
// var $tweetCorral = $('<div id="corral"></div>');
// function get_all_tweets(){
    
//     while(index >= 0){
//           var tweet = streams.home[index];
//           var $tweet = $('<div class="tweet"></div>');
//           $tweet.text('@' + tweet.user + ': ' + tweet.message);
//           $tweet.appendTo($tweetCorral);
//           index -= 1;
//         }
// }

var index = 0;

var get_new_tweets = function(){
  
  while (index < streams.home.length){
    get_tweet(streams.home[index]);
    index += 1;
  }

};

var get_tweet = function(tweet){
  
  var $tweet = $('<div class="tweet"></div>');
  var $post = $(`<div class="post">${tweet.message}</div>`);
  var $date = $(`<span class="date">${tweet.created_at}</span>`);
  var $handle = $(`<span class="handle">@${tweet.user}</span>`);
  $tweet.append($handle);
  $tweet.append($date);
  $tweet.append($post);
  $tweet.prependTo("#corral");
}
