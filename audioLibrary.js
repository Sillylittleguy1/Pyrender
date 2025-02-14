// vpython_audio.js

// Function to play an audio file
function playAudio(audioUrl) {
    var audio = new Audio(audioUrl); // Create an audio object
    audio.play(); // Play the audio
}

// Function to pause the audio
function pauseAudio() {
    if (audio) {
        audio.pause();
    }
}

// Function to stop the audio
function stopAudio() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0; // Reset the playback time
    }
}
