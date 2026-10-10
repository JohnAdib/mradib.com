export type Context = CanvasRenderingContext2D;

export function block(
	ctx: Context,
	x: number,
	y: number,
	width: number,
	height: number,
	color: string,
) {
	ctx.fillStyle = color;
	ctx.fillRect(Math.round(x), Math.round(y), width, height);
}
