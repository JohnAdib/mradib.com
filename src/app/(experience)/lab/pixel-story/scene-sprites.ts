import type { GameState } from "./game-state";
import { block, type Context } from "./pixel-draw";

export function drawPoundCoin(
	ctx: Context,
	x: number,
	y: number,
	scale: number,
	phase: number,
) {
	ctx.save();
	ctx.translate(Math.round(x), Math.round(y));
	const face = Math.cos(phase);
	ctx.scale(scale * (0.62 + 0.38 * Math.abs(face)), scale);
	const rim = face >= 0 ? "#965025" : "#9c6539";
	const rowWidths = [6, 10, 12, 14, 14, 14, 14, 14, 14, 14, 14, 12, 10, 6];
	for (let row = 0; row < rowWidths.length; row++) {
		const width = rowWidths[row];
		const yRow = row - 7;
		block(ctx, -width / 2, yRow, width, 1, rim);
		if (row > 0 && row < rowWidths.length - 1)
			block(
				ctx,
				-width / 2 + 1,
				yRow,
				width - 2,
				1,
				row < 7 ? "#ffe596" : "#f8b84e",
			);
	}
	block(ctx, -3, -6, 6, 1, "#fff3bb");
	if (Math.abs(face) > 0.36) {
		block(ctx, -1, -4, 2, 7, "#9a542c");
		block(ctx, -3, -1, 6, 2, "#9a542c");
		block(ctx, -3, -4, 5, 1, "#9a542c");
		block(ctx, -3, 2, 6, 1, "#9a542c");
	}
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
