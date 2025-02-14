// audioLib.js

// Ensure Tone.js is included (import or CDN in the project)

class AudioManager {
    constructor() {
        this.synth = new Tone.Synth().toDestination();
        this.player = null;
    }

    // Play a sound using a synthesizer
    playTone(frequency, duration) {
        this.synth.triggerAttackRelease(frequency, duration);
    }

    // Play an audio file
    playAudio(fileUrl) {
        if (this.player) {
            this.player.stop();
        }
        this.player = new Tone.Player(fileUrl).toDestination();
        this.player.start();
    }

    // Stop currently playing audio
    stopAudio() {
        if (this.player) {
            this.player.stop();
        }
    }
}

// Expose AudioManager globally so VPython can call it
window.AudioManager = AudioManager;
