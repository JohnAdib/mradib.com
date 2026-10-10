export type Pose = "standing" | "walking" | "jumping" | "crouching";

export interface GameState {
	x: number;
	y: number;
	velocityY: number;
	pose: Pose;
}

export interface GameInput {
	left: boolean;
	right: boolean;
	crouch: boolean;
	jump: boolean;
}

export const initialGameState = (): GameState => ({
	x: 0,
	y: 0,
	velocityY: 0,
	pose: "standing",
});

export function stepGame(state: GameState, input: GameInput, seconds: number) {
	const step = Math.min(seconds, 0.05);
	const direction = Number(input.right) - Number(input.left);
	if (input.jump && state.y === 0) state.velocityY = -190;
	state.x = Math.max(-700, Math.min(700, state.x + direction * 105 * step));
	state.velocityY += 520 * step;
	state.y = Math.min(0, state.y + state.velocityY * step);
	if (state.y === 0) state.velocityY = 0;
	state.pose =
		state.y < 0
			? "jumping"
			: input.crouch
				? "crouching"
				: direction !== 0
					? "walking"
					: "standing";
	input.jump = false;
}
