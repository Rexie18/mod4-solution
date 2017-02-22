(function (window) {
  var helloSpeaker = {};
  helloSpeaker.speak = names;
  var speakWord = "Hello";
    helloSpeaker.speak = function () {
    console.log(speakWord + " " + names);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
