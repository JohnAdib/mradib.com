import type { GameState } from "./game-state";
import { block, type Context } from "./pixel-draw";
import {
	drawElizabethTower,
	drawLondonEye,
	drawTowerBridge,
	drawWestminster,
	type ScenePalette,
} from "./scene-landmarks";
import { drawDollarCoin, drawPerson } from "./scene-sprites";

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
	coins: Coin[];
}

export interface Coin {
	x: number;
	y: number;
	speed: number;
	phase: number;
	seed: number;
}

export interface CoinPickup {
	x: number;
	y: number;
}

export function sceneMetrics(width: number, height: number, player: GameState) {
	const ground =
		height - (width < 160 ? 42 : Math.max(33, Math.round(height * 0.13)));
	const scale = Math.max(0.75, Math.min(2.5, width / 300, (ground - 18) / 158));
	const playerX = Math.max(
		20,
		Math.min(width - 20, width / 2 + player.x * 0.63),
	);
	const personScale = Math.min(scale, Math.max(0.42, (ground - 10) / 110));
	return { ground, scale, playerX, personScale };
}

export function newCoins(
	width: number,
	ground: number,
	personScale: number,
): Coin[] {
	return Array.from({ length: 6 }, (_, seed) => ({
		x:
			seed === 0
				? width / 2 + Math.min(width * 0.2, 28 * personScale)
				: 22 + ((seed * 89) % Math.max(30, width - 44)),
		y: seed === 0 ? ground - 82 * personScale - 25 : -seed * 55,
		speed: 26 + (seed % 3) * 8,
		phase: seed * 1.7,
		seed,
	}));
}

export function advanceCoins(
	coins: Coin[],
	width: number,
	ground: number,
	playerX: number,
	playerY: number,
	personScale: number,
	seconds: number,
): CoinPickup[] {
	const caught: CoinPickup[] = [];
	for (const coin of coins) {
		coin.y += coin.speed * seconds;
		coin.phase += seconds * 5.5;
		const touching =
			Math.abs(coin.x - playerX) < 11 * personScale + 7 &&
			coin.y > ground + playerY - 72 * personScale &&
			coin.y < ground + playerY - 3 * personScale;
		if (touching || coin.y > ground + 12) {
			if (touching) caught.push({ x: coin.x, y: coin.y });
			coin.seed += 6;
			coin.x = 18 + ((coin.seed * 89) % Math.max(30, width - 36));
			coin.y = -20 - (coin.seed % 4) * 36;
			coin.speed = 26 + (coin.seed % 4) * 7;
		}
	}
	return caught;
}

export function drawScene(ctx: Context, frame: SceneFrame) {
	const { width, height } = ctx.canvas;
	const { chapter, player, reducedMotion, time, coins } = frame;
	const color = palettes[chapter];
	const { ground, scale, playerX, personScale } = sceneMetrics(
		width,
		height,
		player,
	);
	const camera = player.x * 0.34;
	ctx.imageSmoothingEnabled = false;
	block(ctx, 0, 0, width, height, color.sky);
	block(ctx, 0, Math.round(height * 0.62), width, height, color.haze);
	ctx.globalAlpha = 0.18;
	for (const [index, proportion] of [0.16, 0.47, 0.83].entries()) {
		const cloudX = Math.round(width * proportion - camera * 0.06);
		const cloudY = Math.round(height * (0.17 + (index % 2) * 0.13));
		block(ctx, cloudX - 20, cloudY, 40, 4, color.far);
		block(ctx, cloudX - 12, cloudY - 5, 31, 5, color.far);
		block(ctx, cloudX - 4, cloudY - 8, 19, 3, color.far);
		block(ctx, cloudX + 17, cloudY + 4, 18, 2, color.far);
	}
	ctx.globalAlpha = 0.1;
	for (let i = 0; i < Math.ceil(width / 120) + 1; i++) {
		const motifX = 32 + i * 120 - camera * 0.08;
		const motifY = 30 + ((i * 61) % Math.max(60, ground * 0.4));
		drawDollarCoin(ctx, motifX, motifY, Math.max(0.75, scale * 0.43), 0);
	}
	ctx.globalAlpha = 0.13;
	for (let y = 0; y < ground; y += 4)
		for (let x = (y / 4) % 2; x < width; x += 4)
			block(ctx, x, y, 1, 1, color.shadow);
	ctx.globalAlpha = 0.43;
	for (let i = -2; i < Math.ceil(width / 7) + 5; i++) {
		const x = Math.round(i * 7 - ((camera * 0.13) % 7));
		const roof = ground - 30 - ((i * 13 + 500) % 35);
		block(ctx, x, roof, 6, ground - roof, color.far);
		if (i % 3 === 0) block(ctx, x + 2, roof - 3, 2, 3, color.far);
		if (i % 9 === 0) {
			block(ctx, x + 1, roof - 7, 4, 4, color.far);
			block(ctx, x + 2, roof - 11, 2, 4, color.far);
		}
		for (let wy = roof + 6; wy < ground - 4; wy += 7)
			block(ctx, x + 2, wy, 1, 2, color.sky);
	}
	ctx.globalAlpha = 0.55;
	for (let i = -2; i < Math.ceil(width / 15) + 4; i++) {
		const x = Math.round(i * 15 - ((camera * 0.24) % 15));
		const roof = ground - 22 - ((i * 19 + 300) % 25);
		block(ctx, x, roof, 12, ground - roof, color.far);
		if (i % 5 === 0) {
			block(ctx, x + 2, roof - 3, 8, 3, color.far);
			block(ctx, x + 4, roof - 5, 4, 2, color.far);
		}
		for (let wy = roof + 5; wy < ground - 3; wy += 7)
			for (let wx = x + 3; wx < x + 11; wx += 5)
				block(ctx, wx, wy, 1, 2, color.gold);
	}
	ctx.globalAlpha = 1;
	block(ctx, 0, ground - 19, width, 21, color.water);
	for (let x = -20; x < width + 20; x += 27) {
		block(ctx, x - ((camera * 0.3) % 27), ground - 8, 14, 2, color.haze);
	}
	drawWestminster(
		ctx,
		width * 0.77 - camera * 0.27,
		ground - 14,
		scale * 0.9,
		color,
	);
	drawLondonEye(
		ctx,
		width * 0.55 - camera * 0.28,
		ground - 17,
		scale * 0.8,
		color,
	);
	drawTowerBridge(ctx, width * 0.1 - camera * 0.45, ground - 13, scale, color);
	drawElizabethTower(
		ctx,
		width * 0.79 - camera * 0.45,
		ground - 12,
		scale,
		color,
	);
	block(ctx, 0, ground, width, height - ground, color.shadow);
	for (let x = -25; x < width + 25; x += 25) {
		block(ctx, x - ((camera * 0.65) % 25), ground + 4, 13, 2, color.gold);
	}
	drawPerson(ctx, playerX, ground, personScale, player, time, reducedMotion);
	for (const coin of coins)
		drawDollarCoin(
			ctx,
			coin.x,
			coin.y,
			Math.max(1.15, scale * 0.88),
			reducedMotion ? 0 : coin.phase,
		);
	return camera;
}
