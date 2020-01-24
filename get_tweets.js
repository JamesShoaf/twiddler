var index = 0;
var currentUser = 'home';
var $tweetCorral = $('<div id="corral"></div>');

var clear_the_corral = function(){
  index = 0;
  //var $tweetCorral = $('<div id="corral"></div>');
  $("#corral").remove();
  $('<div id="corral"></div>').appendTo($('body'));
}

var get_new_tweets = function(){
  if(currentUser !== 'home'){
    clear_the_corral();
    currentUser = 'home';
  }
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
  $handle.click(function(){get_tweets_by_user(tweet.user);});
  $tweet.append($handle);
  $tweet.append($date);
  $tweet.append($post);
  $tweet.prependTo("#corral");
}

var get_tweets_by_user = function(user){
  clear_the_corral();
  while (index < streams.users[user].length){
    get_tweet(streams.users[user][index]);
    index++;
  }
  currentUser = user;
}