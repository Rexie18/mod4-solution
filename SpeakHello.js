(function () {
  var helloSpeaker = {};
  helloSpeaker.speak = names;
  var speakWord = "Hello";
    helloSpeaker.speak = function () {
    console.log(speakWord + helloSpeaker.speak);
  }

  window.helloSpeaker = helloSpeaker;

})();
