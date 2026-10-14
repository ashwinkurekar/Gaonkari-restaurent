/**
 * Synthesizes a realistic soft paper turn/rustle sound using Web Audio API.
 * Requires zero external audio files, operates with zero latency, and complies
 * with browser user-gesture activation constraints.
 */
let audioCtx: AudioContext | null = null;

export const playPageTurnSound = (isMuted: boolean): void => {
  if (isMuted || typeof window === 'undefined') return;

  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const duration = 0.22;
    const sampleRate = audioCtx.sampleRate;
    const bufferSize = Math.floor(sampleRate * duration);
    const buffer = audioCtx.createBuffer(1, bufferSize, sampleRate);
    const output = buffer.getChannelData(0);

    // Generate shaped organic noise that mimics parchment/heavy paper sliding
    for (let i = 0; i < bufferSize; i++) {
      const progress = i / bufferSize;
      // Exponential rise and gentle decay envelope
      const envelope = Math.sin(progress * Math.PI) * Math.exp(-progress * 2.2);
      output[i] = (Math.random() * 2 - 1) * envelope * 0.35;
    }

    const source = audioCtx.createBufferSource();
    source.buffer = buffer;

    // Bandpass filter to isolate the paper rustle frequency range (500Hz - 2200Hz)
    const bandpass = audioCtx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(750, audioCtx.currentTime);
    bandpass.frequency.exponentialRampToValueAtTime(1600, audioCtx.currentTime + duration * 0.4);
    bandpass.frequency.exponentialRampToValueAtTime(450, audioCtx.currentTime + duration);
    bandpass.Q.setValueAtTime(1.5, audioCtx.currentTime);

    // Subtle lowpass to soften digital hiss
    const lowpass = audioCtx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.setValueAtTime(3200, audioCtx.currentTime);

    // Master volume gain
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.28, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.005, audioCtx.currentTime + duration);

    // Audio graph wiring
    source.connect(bandpass);
    bandpass.connect(lowpass);
    lowpass.connect(gain);
    gain.connect(audioCtx.destination);

    source.start();
  } catch {
    // Fail silently without interrupting UI interaction
  }
};
