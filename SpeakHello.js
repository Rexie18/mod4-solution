(function () {
  var helloSpeaker = {};
  helloSpeaker.speak= names;
  var speakWord = "Hello";
    helloSpeaker.speak = function () {
    console.log(speakWord + helloSpeaker.speak);
  }

helloSpeaker.speak = helloSpeaker;

})();
