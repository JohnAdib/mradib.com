const palettes = [
	{
		sky: "#e4b9ce",
		haze: "#d09dbd",
		far: "#b47aab",
		near: "#785f91",
		ground: "#413e69",
		water: "#876eaa",
	},
	{
		sky: "#f4d878",
		haze: "#e6bd61",
		far: "#c2946b",
		near: "#7e687d",
		ground: "#3c405e",
		water: "#817b88",
	},
	{
		sky: "#81c8d1",
		haze: "#67aebd",
		far: "#5d8fa9",
		near: "#4b698c",
		ground: "#263f63",
		water: "#39748d",
	},
] as const;

type Context = CanvasRenderingContext2D;

function block(
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

function skyline(ctx: Context, chapter: number) {
	const color = palettes[chapter];
	block(ctx, 0, 0, 320, 180, color.sky);
	block(ctx, 0, 46, 320, 134, color.haze);
	block(ctx, 0, 92, 320, 88, color.sky);
	for (let x = 0; x < 320; x += 13) {
		const height = 18 + ((x * 7) % 29);
		block(ctx, x, 126 - height, 12, height + 20, color.far);
	}
	block(ctx, 0, 143, 320, 37, color.water);
	for (let x = 4; x < 320; x += 22) {
		block(ctx, x, 157 + ((x * 3) % 13), 10, 2, color.haze);
	}
}

function towerBridge(ctx: Context, chapter: number) {
	const { near, ground } = palettes[chapter];
	for (const x of [24, 102]) {
		block(ctx, x, 77, 24, 68, near);
		block(ctx, x + 4, 68, 16, 9, near);
		block(ctx, x + 8, 62, 8, 6, near);
		block(ctx, x + 11, 57, 2, 5, near);
		block(ctx, x + 9, 83, 6, 13, "#f5d9b3");
		block(ctx, x + 11, 85, 2, 11, ground);
		block(ctx, x + 4, 102, 5, 6, ground);
		block(ctx, x + 15, 102, 5, 6, ground);
	}
	block(ctx, 0, 117, 143, 5, ground);
	block(ctx, 0, 121, 143, 3, "#f5d9b3");
	for (let x = 46; x < 102; x += 3) {
		const drop = Math.max(0, 16 - Math.abs(x - 74) / 2);
		block(ctx, x, 99 + drop, 2, 18 - drop, near);
	}
	block(ctx, 48, 96, 54, 3, near);
	block(ctx, 0, 132, 143, 5, near);
}

function clockTower(ctx: Context, chapter: number) {
	const { near, ground } = palettes[chapter];
	block(ctx, 259, 49, 27, 96, near);
	block(ctx, 256, 45, 33, 5, ground);
	block(ctx, 260, 40, 25, 5, near);
	block(ctx, 263, 34, 19, 6, ground);
	block(ctx, 268, 24, 9, 10, near);
	block(ctx, 271, 18, 3, 7, ground);
	block(ctx, 263, 55, 19, 19, "#f7dfaa");
	block(ctx, 266, 58, 13, 13, "#62566d");
	block(ctx, 268, 60, 9, 9, "#f7dfaa");
	block(ctx, 272, 61, 2, 6, ground);
	block(ctx, 273, 66, 4, 2, ground);
	for (let y = 82; y < 136; y += 16) {
		block(ctx, 265, y, 4, 9, ground);
		block(ctx, 276, y, 4, 9, ground);
	}
}

function person(ctx: Context, chapter: number, frame: number, still: boolean) {
	const bob = still ? 0 : Math.round(Math.sin(frame / 8));
	const x = chapter === 2 ? 170 : 158;
	const y = 81 + bob;
	block(ctx, x - 6, y, 12, 4, "#282c46");
	block(ctx, x - 8, y + 4, 16, 5, "#282c46");
	block(ctx, x - 6, y + 9, 12, 13, "#f1c095");
	block(ctx, x - 4, y + 14, 2, 2, "#232d42");
	block(ctx, x + 3, y + 14, 2, 2, "#232d42");
	block(ctx, x - 8, y + 22, 16, 28, "#254c68");
	block(ctx, x - 2, y + 24, 4, 23, "#f5e3c4");
	block(ctx, x - 13, y + 25, 5, 25, "#254c68");
	block(ctx, x + 8, y + 25, 5, 25, "#254c68");
	block(ctx, x - 13, y + 49, 5, 4, "#f1c095");
	block(ctx, x + 8, y + 49, 5, 4, "#f1c095");
	block(ctx, x - 8, y + 50, 7, 25, "#23374f");
	block(ctx, x + 1, y + 50, 7, 25, "#23374f");
	block(ctx, x - 10, y + 75, 9, 4, "#1b263b");
	block(ctx, x + 1, y + 75, 9, 4, "#1b263b");
}

function coin(ctx: Context, x: number, y: number, color: string) {
	block(ctx, x + 3, y, 6, 2, "#fff3b2");
	block(ctx, x + 1, y + 2, 10, 8, color);
	block(ctx, x + 3, y + 10, 6, 2, "#a87238");
	block(ctx, x + 4, y + 3, 4, 6, "#fff3b2");
	block(ctx, x + 5, y + 4, 2, 4, "#bd7f39");
}

export function drawScene(
	ctx: Context,
	chapter: number,
	frame: number,
	still: boolean,
) {
	ctx.imageSmoothingEnabled = false;
	skyline(ctx, chapter);
	towerBridge(ctx, chapter);
	clockTower(ctx, chapter);
	block(ctx, 0, 140, 320, 4, palettes[chapter].ground);
	for (let index = 0; index < 12; index++) {
		const x = 8 + ((index * 47 + chapter * 19) % 301);
		const y = still
			? 16 + ((index * 29) % 100)
			: ((index * 29 + frame * ((index % 3) + 1)) % 153) - 12;
		coin(ctx, x, y, index % 3 === 0 ? "#e9a44b" : "#f7cb65");
	}
	person(ctx, chapter, frame, still);
	block(ctx, 0, 162, 320, 18, palettes[chapter].ground);
	for (let x = 0; x < 320; x += 22)
		block(ctx, x, 162, 13, 2, palettes[chapter].haze);
}
