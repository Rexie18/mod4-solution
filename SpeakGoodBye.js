(function () {
  var byeSpeaker = {};
  byeSpeaker.speak = name;
  var speakWord = "Good Bye";
    byeSpeaker.speak = function () {
    console.log(speakWord + byeSpeaker.speak);
  }

byeSpeaker = byeSpeaker;

})();

