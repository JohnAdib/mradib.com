export function playCoinSound(context: AudioContext) {
	const start = context.currentTime;
	for (const [index, pitch] of [660, 990].entries()) {
		const oscillator = context.createOscillator();
		const gain = context.createGain();
		const noteStart = start + index * 0.075;
		oscillator.type = "sine";
		oscillator.frequency.setValueAtTime(pitch, noteStart);
		gain.gain.setValueAtTime(0.075, noteStart);
		gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.18);
		oscillator.connect(gain);
		gain.connect(context.destination);
		oscillator.start(noteStart);
		oscillator.stop(noteStart + 0.2);
	}
}
