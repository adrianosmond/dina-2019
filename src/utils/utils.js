
let context;
let oscillator;
let gain;

const frequencies = {
  'C3' :130.8,
  'D3' :146.8,
  'E3' :164.8,
  'F3' :174.6,
  'G3' :196.0,
  'A3' :220.0,
  'B3': 246.9,
  'C4': 261.6,
  'D4': 293.7,
  'E4': 329.6,	
  'F4': 349.2,
  'G4': 392.0,
  'A4': 440.0,
  'B4': 493.9,
}

let timeouts = [];

const initContext = () => {
  context = new AudioContext()
  oscillator = context.createOscillator()
  gain = context.createGain();
  oscillator.connect(gain)
  gain.connect(context.destination)
  oscillator.type = "sine"
  gain.gain.linearRampToValueAtTime(0.000001, context.currentTime)
  oscillator.start(0);
}

const playNote = (freq = 261.6, duration = 500) => {
  oscillator.frequency.value = freq;
  gain.gain.exponentialRampToValueAtTime(1, context.currentTime + 0.04)
  timeouts.push(setTimeout(stopNote, duration));
}

const stopNote = () => {
  gain.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.04)
}

const getFreq = (freq) => {
  if (frequencies.hasOwnProperty(freq)) {
    return frequencies[freq];
  }
  return 261.6;
}

const clearTimeouts = () => {
  timeouts.forEach(timeout => window.clearTimeout(timeout));
  timeouts = [];
}

export const playNotes = (notes = [], duration = 500) => {
  if (!context) {
    initContext();
  }
  if (timeouts.length > 0) {
    clearTimeouts();
  }
  timeouts = notes.map((note, idx) =>
    setTimeout(() => {
      playNote(getFreq(note), duration);
    }, (duration * idx) + (100 * idx)))
}
