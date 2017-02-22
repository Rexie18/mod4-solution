(function (window) {
  var byeSpeaker = {};
  byeSpeaker.speak = names;
  var speakWord = "Good Bye";
    byeSpeaker.speak = function () {
    console.log(speakWord + " " + names);
  }

  window.byeSpeaker = byeSpeaker;

})(window);

