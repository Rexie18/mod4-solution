(function () {
  var byeSpeaker = {};
  byeSpeaker.speak = names;
  var speakWord = "Good Bye";
    byeSpeaker.speak = function () {
    console.log(speakWord + byeSpeaker.speak);
  }

  window.byeSpeaker = byeSpeaker;

})();

