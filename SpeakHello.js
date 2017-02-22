(function () {
  var helloSpeaker = {};
  helloSpeaker.speak = name;
  var speakWord = "Hello";
    helloSpeaker.speak = function () {
    console.log(speakWord + helloSpeaker.speak);
  }

  window.helloSpeaker = helloSpeaker;

})();
