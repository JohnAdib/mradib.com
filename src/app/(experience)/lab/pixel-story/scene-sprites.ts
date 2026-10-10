import type { GameState } from "./game-state";
import { block, type Context } from "./pixel-draw";

export function drawPoundCoin(
	ctx: Context,
	x: number,
	y: number,
	scale: number,
) {
	ctx.save();
	ctx.translate(Math.round(x), Math.round(y));
	ctx.scale(scale, scale);
	block(ctx, 3, 0, 8, 2, "#fff2b5");
	block(ctx, 1, 2, 12, 10, "#ad6c30");
	block(ctx, 3, 12, 8, 2, "#8a4d2c");
	block(ctx, 2, 3, 10, 8, "#f6be54");
	block(ctx, 4, 4, 6, 6, "#fff0a0");
	block(ctx, 6, 4, 4, 1, "#76412e");
	block(ctx, 5, 5, 2, 5, "#76412e");
	block(ctx, 4, 7, 5, 1, "#76412e");
	block(ctx, 4, 10, 7, 1, "#76412e");
	ctx.restore();
}

export function drawPerson(
	ctx: Context,
	x: number,
	ground: number,
	scale: number,
	state: GameState,
	time: number,
	still: boolean,
) {
	const crouching = state.pose === "crouching";
	const walking = state.pose === "walking" && !still;
	const stride = walking && Math.floor(time * 8) % 2 === 0 ? 3 : 0;
	ctx.save();
	ctx.translate(Math.round(x), Math.round(ground + state.y));
	ctx.scale(scale, scale);
	if (crouching) ctx.translate(0, 18);
	block(ctx, -7, -75, 14, 4, "#1d2940");
	block(ctx, -9, -71, 18, 5, "#1d2940");
	block(ctx, -6, -66, 12, 15, "#f1c59b");
	block(ctx, -4, -61, 2, 2, "#243146");
	block(ctx, 3, -61, 2, 2, "#243146");
	block(ctx, -2, -56, 5, 1, "#9b5c55");
	block(ctx, -8, -51, 16, crouching ? 16 : 27, "#174b69");
	block(ctx, -2, -49, 4, crouching ? 14 : 24, "#f7e5c7");
	block(ctx, -13, -49, 5, crouching ? 16 : 27, "#174b69");
	block(ctx, 8, -49, 5, crouching ? 16 : 27, "#174b69");
	block(ctx, -13, crouching ? -33 : -24, 5, 4, "#f1c59b");
	block(ctx, 8, crouching ? -33 : -24, 5, 4, "#f1c59b");
	if (crouching) ctx.translate(0, -18);
	block(
		ctx,
		-8 - stride,
		crouching ? -17 : -24,
		7,
		crouching ? 14 : 22,
		"#253851",
	);
	block(
		ctx,
		1 + stride,
		crouching ? -17 : -24,
		7,
		crouching ? 14 : 22,
		"#253851",
	);
	block(ctx, -10 - stride, -3, 10, 3, "#18263b");
	block(ctx, 1 + stride, -3, 10, 3, "#18263b");
	ctx.restore();
}
