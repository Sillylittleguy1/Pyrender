// audioLibrary.js
class AudioPlayer {
    constructor() {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    // Function to play an audio file from a URL
    playAudioFile(url) {
        fetch(url)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => this.audioCtx.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                const source = this.audioCtx.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(this.audioCtx.destination);
                source.start();
            })
            .catch(error => console.error('Error loading or decoding audio file:', error));
    }
}

// Export the AudioPlayer class for use in other scripts
window.AudioPlayer = AudioPlayer;
