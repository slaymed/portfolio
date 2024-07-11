export class Board {
	width: number;
	height: number;
	readonly ctx: CanvasRenderingContext2D;

	constructor(readonly canvas: HTMLCanvasElement) {
		this.width = canvas.width;
		this.height = canvas.height;
		this.ctx = canvas.getContext('2d')!;
	}

	resize(width: number, height: number) {
		this.width = width;
		this.height = height;
		this.canvas.width = this.width;
		this.canvas.height = this.height;
	}

	clear() {
		this.ctx.clearRect(0, 0, this.width, this.height);
	}
}

export class Star {
	private _x: number;
	private _y: number;
	private _vx: number;
	private _vy: number;
	private _radius: 0.5;
	private _opacity: number;
	private _maxOpacity: number;
	private _fadeInSpeed: number;

	constructor(private _board: Board) {
		this._x = Math.random() * _board.width;
		this._y = Math.random() * _board.height;
		this._opacity = 0;
		this._maxOpacity = 1;
		this._radius = 0.5;
		this._fadeInSpeed = 0.005;
		this._vx = Math.random() * 0.5 - 0.25;
		this._vy = Math.random() * 0.5 - 0.25;
	}

	draw() {
		this._board.ctx.save();
		this._board.ctx.beginPath();
		this._board.ctx.fillStyle = `rgb(102, 102, 102, ${this._opacity})`;
		this._board.ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2);
		this._board.ctx.fill();
		this._board.ctx.restore();
	}

	update() {
		this._x += this._vx;
		this._y += this._vy;

		if (this._opacity < this._maxOpacity) {
			this._opacity += this._fadeInSpeed;
			if (this._opacity > this._maxOpacity) {
				this._opacity = this._maxOpacity;
			}
		}

		if (this._x < 0) this._x = this._board.width;
		if (this._x > this._board.width) this._x = 0;
		if (this._y < 0) this._y = this._board.height;
		if (this._y > this._board.height) this._y = 0;
	}
}
