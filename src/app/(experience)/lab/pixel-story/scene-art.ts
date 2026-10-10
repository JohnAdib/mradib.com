import type { GameState } from "./game-state";
import { block, type Context } from "./pixel-draw";
import {
	drawElizabethTower,
	drawTowerBridge,
	type ScenePalette,
} from "./scene-landmarks";
import { drawPerson, drawPoundCoin } from "./scene-sprites";

const palettes: ScenePalette[] = [
	{
		sky: "#efc7d8",
		haze: "#d7a4c3",
		far: "#b580ae",
		stone: "#755a8e",
		shadow: "#3c3969",
		water: "#9675aa",
		gold: "#f5d7ae",
	},
	{
		sky: "#f7dc88",
		haze: "#e9c368",
		far: "#b5957a",
		stone: "#77687b",
		shadow: "#3b405c",
		water: "#89849a",
		gold: "#f9df9d",
	},
	{
		sky: "#95d2db",
		haze: "#69b5c4",
		far: "#6e99ac",
		stone: "#526f96",
		shadow: "#284563",
		water: "#49879f",
		gold: "#f6d3a4",
	},
];

export interface SceneFrame {
	chapter: number;
	time: number;
	player: GameState;
	reducedMotion: boolean;
}

export function drawScene(ctx: Context, frame: SceneFrame) {
	const { width, height } = ctx.canvas;
	const { chapter, player, reducedMotion, time } = frame;
	const color = palettes[chapter];
	const ground =
		height - (width < 160 ? 42 : Math.max(33, Math.round(height * 0.13)));
	const camera = player.x * 0.34;
	const scale = Math.max(
		0.32,
		Math.min(1.35, width / 280, (ground - 10) / 150),
	);
	ctx.imageSmoothingEnabled = false;
	block(ctx, 0, 0, width, height, color.sky);
	block(ctx, 0, Math.round(height * 0.25), width, height, color.haze);
	block(ctx, 0, Math.round(height * 0.53), width, height, color.sky);
	for (let i = -2; i < Math.ceil(width / 13) + 4; i++) {
		const x = Math.round(i * 13 - ((camera * 0.16) % 13));
		const roof = ground - 38 - ((i * 17 + 300) % 35);
		block(ctx, x, roof, 11, ground - roof, color.far);
		block(ctx, x + 4, roof + 9, 2, 4, color.haze);
	}
	block(ctx, 0, ground - 19, width, 21, color.water);
	for (let x = -20; x < width + 20; x += 27) {
		block(ctx, x - ((camera * 0.3) % 27), ground - 8, 14, 2, color.haze);
	}
	drawTowerBridge(ctx, width * 0.1 - camera * 0.45, ground - 13, scale, color);
	drawElizabethTower(
		ctx,
		width * 0.79 - camera * 0.45,
		ground - 12,
		scale,
		color,
	);
	const coinTime = reducedMotion ? 0 : time;
	for (let i = 0; i < 8; i++) {
		const span = width + 30;
		const x = ((((i * 73 + 32 - camera * 0.18) % span) + span) % span) - 10;
		const y = ((i * 61 + coinTime * (8 + (i % 3) * 5)) % (ground + 35)) - 18;
		drawPoundCoin(ctx, x, y, Math.max(0.8, scale * 0.9));
	}
	block(ctx, 0, ground, width, height - ground, color.shadow);
	for (let x = -25; x < width + 25; x += 25) {
		block(ctx, x - ((camera * 0.65) % 25), ground + 4, 13, 2, color.gold);
	}
	const playerX = Math.max(
		20,
		Math.min(width - 20, width / 2 + player.x * 0.63),
	);
	const personScale = Math.min(
		Math.max(0.55, scale),
		Math.max(0.35, (ground - 10) / 110),
	);
	drawPerson(ctx, playerX, ground, personScale, player, time, reducedMotion);
	return camera;
}
