// vpython_audio.js

// Exposing the audio functions to Web VPython via the global 'window' object

window.playAudio = function(audioUrl) {
    var audio = new Audio(audioUrl); // Create an audio object
    audio.play(); // Play the audio
};

window.pauseAudio = function() {
    if (audio) {
        audio.pause();
    }
};

window.stopAudio = function() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0; // Reset the playback time
    }
};
