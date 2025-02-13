// audioLibrary.js
class AudioPlayer {
    constructor() {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    // Function to play an audio file from binary data
    playAudioFile(data) {
        this.audioCtx.decodeAudioData(data)
            .then(audioBuffer => {
                const source = this.audioCtx.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(this.audioCtx.destination);
                source.start();
            })
            .catch(error => console.error('Error decoding audio data:', error));
    }
}

// Export the AudioPlayer class for use in other scripts
window.AudioPlayer = AudioPlayer;
