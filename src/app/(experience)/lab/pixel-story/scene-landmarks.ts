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
		block(ctx, towerX, -74, 22, 74, color.stone);
		block(ctx, towerX - 3, -78, 28, 5, color.shadow);
		block(ctx, towerX + 3, -87, 16, 9, color.stone);
		block(ctx, towerX + 7, -93, 8, 6, color.shadow);
		block(ctx, towerX + 10, -99, 2, 6, color.gold);
		block(ctx, towerX + 4, -64, 14, 17, color.gold);
		block(ctx, towerX + 7, -61, 8, 14, color.shadow);
		for (const windowY of [-39, -25, -11]) {
			block(ctx, towerX + 4, windowY, 4, 7, color.shadow);
			block(ctx, towerX + 14, windowY, 4, 7, color.shadow);
		}
		block(ctx, towerX + 1, -74, 3, 72, color.gold);
	}
	block(ctx, 22, -67, 60, 5, color.shadow);
	block(ctx, 22, -62, 60, 2, color.gold);
	for (let cableX = 24; cableX < 82; cableX += 4) {
		const drop = 18 - Math.abs(cableX - 52) / 2;
		block(ctx, cableX, -59, 1, 32 + drop, color.stone);
	}
	block(ctx, -12, -27, 128, 6, color.shadow);
	block(ctx, -12, -20, 128, 2, color.gold);
	for (let pierX = -8; pierX < 116; pierX += 13)
		block(ctx, pierX, -18, 3, 18, color.stone);
	block(ctx, -12, -4, 128, 4, color.shadow);
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
	block(ctx, -2, -112, 37, 5, color.shadow);
	block(ctx, 1, -119, 31, 7, color.stone);
	for (let i = 0; i < 5; i++) block(ctx, i * 7, -124, 5, 5, color.shadow);
	block(ctx, 7, -134, 19, 10, color.stone);
	block(ctx, 10, -142, 13, 8, color.shadow);
	block(ctx, 14, -150, 5, 8, color.stone);
	block(ctx, 16, -157, 1, 7, color.gold);
	block(ctx, 3, -105, 27, 27, color.gold);
	block(ctx, 5, -103, 23, 23, color.shadow);
	block(ctx, 8, -100, 17, 17, "#f8e4ac");
	block(ctx, 16, -97, 2, 12, color.shadow);
	block(ctx, 17, -88, 6, 2, color.shadow);
	for (let windowY = -70; windowY < -8; windowY += 15) {
		for (const windowX of [6, 15, 24]) {
			block(ctx, windowX, windowY, 4, 9, color.shadow);
			block(ctx, windowX + 1, windowY, 2, 2, color.gold);
		}
	}
	block(ctx, -3, -5, 39, 5, color.shadow);
	ctx.restore();
}
