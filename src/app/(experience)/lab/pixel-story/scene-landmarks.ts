import { block, type Context } from "./pixel-draw";

export interface ScenePalette {
	sky: string;
	haze: string;
	far: string;
	stone: string;
	shadow: string;
	water: string;
	gold: string;
}

function pixelLine(
	ctx: Context,
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	color: string,
) {
	const steps = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
	for (let i = 0; i <= steps; i++) {
		const fraction = steps === 0 ? 0 : i / steps;
		block(
			ctx,
			Math.round(x1 + (x2 - x1) * fraction),
			Math.round(y1 + (y2 - y1) * fraction),
			1,
			1,
			color,
		);
	}
}

export function drawLondonEye(
	ctx: Context,
	x: number,
	ground: number,
	scale: number,
	color: ScenePalette,
) {
	ctx.save();
	ctx.translate(Math.round(x), Math.round(ground));
	ctx.scale(scale, scale);
	const centerY = -73;
	const radius = 36;
	for (let spoke = 0; spoke < 12; spoke++) {
		const angle = (spoke * Math.PI) / 6;
		const rimX = Math.round(Math.sin(angle) * radius);
		const rimY = Math.round(centerY - Math.cos(angle) * radius);
		pixelLine(ctx, 0, centerY, rimX, rimY, color.far);
		block(ctx, rimX - 2, rimY - 1, 4, 3, color.shadow);
		block(ctx, rimX - 1, rimY, 2, 1, color.gold);
	}
	for (let step = 0; step < 96; step++) {
		const angle = (step * Math.PI) / 48;
		block(
			ctx,
			Math.round(Math.sin(angle) * radius),
			Math.round(centerY - Math.cos(angle) * radius),
			2,
			2,
			color.stone,
		);
	}
	pixelLine(ctx, -15, -2, 0, centerY, color.shadow);
	pixelLine(ctx, 15, -2, 0, centerY, color.shadow);
	block(ctx, -4, centerY - 4, 8, 8, color.gold);
	block(ctx, -2, centerY - 2, 4, 4, color.shadow);
	block(ctx, -20, -3, 40, 3, color.shadow);
	ctx.restore();
}

export function drawWestminster(
	ctx: Context,
	x: number,
	ground: number,
	scale: number,
	color: ScenePalette,
) {
	ctx.save();
	ctx.translate(Math.round(x), Math.round(ground));
	ctx.scale(scale, scale);
	ctx.globalAlpha = 0.62;
	block(ctx, -52, -37, 104, 37, color.stone);
	block(ctx, -55, -39, 110, 3, color.shadow);
	for (let roofX = -53; roofX < 55; roofX += 7) {
		block(ctx, roofX, -43, 5, 5, color.stone);
		block(ctx, roofX + 2, -46, 1, 3, color.gold);
	}
	for (let windowX = -47; windowX < 51; windowX += 10) {
		for (const windowY of [-31, -16]) {
			block(ctx, windowX, windowY, 4, 9, color.shadow);
			block(ctx, windowX + 1, windowY, 2, 2, color.gold);
		}
	}
	for (const towerX of [-45, 36]) {
		block(ctx, towerX, -57, 10, 20, color.stone);
		block(ctx, towerX - 2, -60, 14, 4, color.shadow);
		block(ctx, towerX + 2, -68, 6, 8, color.stone);
		block(ctx, towerX + 4, -73, 2, 5, color.gold);
	}
	ctx.restore();
}

export function drawTowerBridge(
	ctx: Context,
	x: number,
	ground: number,
	scale: number,
	color: ScenePalette,
) {
	ctx.save();
	ctx.translate(Math.round(x), Math.round(ground));
	ctx.scale(scale, scale);
	for (const towerX of [0, 82]) {
		block(ctx, towerX - 4, -88, 4, 13, color.shadow);
		block(ctx, towerX - 3, -94, 2, 6, color.gold);
		block(ctx, towerX + 22, -88, 4, 13, color.shadow);
		block(ctx, towerX + 23, -94, 2, 6, color.gold);
		block(ctx, towerX, -74, 22, 74, color.stone);
		for (let lineY = -72; lineY < -5; lineY += 10)
			block(ctx, towerX, lineY, 22, 1, color.shadow);
		block(ctx, towerX - 3, -78, 28, 5, color.shadow);
		for (let tooth = 0; tooth < 5; tooth++)
			block(ctx, towerX - 3 + tooth * 6, -82, 4, 5, color.stone);
		block(ctx, towerX + 3, -87, 16, 9, color.stone);
		block(ctx, towerX + 7, -93, 8, 6, color.shadow);
		block(ctx, towerX + 10, -99, 2, 6, color.gold);
		block(ctx, towerX + 4, -64, 14, 17, color.gold);
		block(ctx, towerX + 7, -61, 8, 14, color.shadow);
		for (const windowY of [-39, -25, -11]) {
			block(ctx, towerX + 4, windowY, 4, 7, color.shadow);
			block(ctx, towerX + 14, windowY, 4, 7, color.shadow);
			block(ctx, towerX + 5, windowY, 2, 1, color.gold);
			block(ctx, towerX + 15, windowY, 2, 1, color.gold);
		}
		block(ctx, towerX + 1, -74, 3, 72, color.gold);
	}
	block(ctx, 22, -67, 60, 5, color.shadow);
	block(ctx, 22, -62, 60, 2, color.gold);
	for (let arch = 26; arch < 80; arch += 10) {
		block(ctx, arch, -66, 6, 4, color.gold);
		block(ctx, arch + 1, -65, 4, 3, color.shadow);
	}
	// Tower Bridge's paired suspension chains sag between the towers.
	for (let cableX = 22; cableX <= 82; cableX += 2) {
		const arc = 17 * (1 - ((cableX - 52) / 30) ** 2);
		const chainY = Math.round(-63 + arc);
		block(ctx, cableX, chainY, 3, 2, color.shadow);
		block(ctx, cableX, chainY, 2, 1, color.gold);
		if ((cableX - 22) % 8 === 0)
			block(ctx, cableX + 1, chainY + 2, 1, -27 - chainY - 2, color.gold);
	}
	block(ctx, -12, -27, 128, 6, color.shadow);
	block(ctx, -12, -20, 128, 2, color.gold);
	for (let pierX = -8; pierX < 116; pierX += 13)
		block(ctx, pierX, -18, 3, 18, color.stone);
	block(ctx, -12, -4, 128, 4, color.shadow);
	for (let parapetX = -10; parapetX < 116; parapetX += 6)
		block(ctx, parapetX, -29, 4, 2, color.gold);
	ctx.restore();
}

export function drawElizabethTower(
	ctx: Context,
	x: number,
	ground: number,
	scale: number,
	color: ScenePalette,
) {
	ctx.save();
	ctx.translate(Math.round(x), Math.round(ground));
	ctx.scale(scale, scale);
	block(ctx, 1, -110, 31, 110, color.stone);
	block(ctx, 4, -108, 2, 103, color.gold);
	block(ctx, 27, -108, 2, 103, color.shadow);
	for (let tier = -73; tier < -9; tier += 15)
		block(ctx, -1, tier + 11, 35, 2, color.gold);
	block(ctx, -2, -112, 37, 5, color.shadow);
	block(ctx, 1, -119, 31, 7, color.stone);
	for (let i = 0; i < 5; i++) block(ctx, i * 7, -124, 5, 5, color.shadow);
	block(ctx, 7, -134, 19, 10, color.stone);
	block(ctx, 10, -142, 13, 8, color.shadow);
	block(ctx, 14, -150, 5, 8, color.stone);
	block(ctx, 16, -157, 1, 7, color.gold);
	block(ctx, 3, -105, 27, 27, color.gold);
	block(ctx, 5, -103, 23, 23, color.shadow);
	const dialRows = [7, 11, 15, 17, 19, 19, 19, 19, 19, 19, 19, 17, 15, 11, 7];
	for (let row = 0; row < dialRows.length; row++) {
		const rowWidth = dialRows[row];
		block(ctx, 16 - rowWidth / 2, -100 + row, rowWidth, 1, "#f8e4ac");
	}
	for (const [tickX, tickY] of [
		[16, -98],
		[23, -93],
		[16, -87],
		[9, -93],
	])
		block(ctx, tickX, tickY, 1, 2, color.shadow);
	block(ctx, 16, -97, 2, 7, color.shadow);
	block(ctx, 17, -92, 6, 2, color.shadow);
	for (let windowY = -70; windowY < -8; windowY += 15) {
		for (const windowX of [6, 15, 24]) {
			block(ctx, windowX, windowY, 4, 9, color.shadow);
			block(ctx, windowX + 1, windowY, 2, 2, color.gold);
		}
	}
	block(ctx, -3, -5, 39, 5, color.shadow);
	ctx.restore();
}
