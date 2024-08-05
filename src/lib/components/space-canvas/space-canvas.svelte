<script lang="ts">
	import { Board, Star } from './state';

	let board: Board;
	let stars = new Array<Star>();
	let canvas = $state<HTMLCanvasElement>();
	let nextAnimationFrame: number | null = null;

	function addStars(count: number) {
		for (let i = 0; i < count; i += 1) {
			stars.push(new Star(board));
		}
	}

	function clearStarsList() {
		stars = new Array<Star>();
	}

	function animate() {
		board.clear();

		stars.forEach((star) => {
			star.draw();
			star.update();
		});

		nextAnimationFrame = requestAnimationFrame(animate);
	}

	function handleResize() {
		board.resize(innerWidth, innerHeight);
	}

	$effect(() => {
		board = new Board(canvas!);

		handleResize();
		addStars(100);
		animate();

		addEventListener('resize', handleResize);

		return function () {
			if (nextAnimationFrame) {
				cancelAnimationFrame(nextAnimationFrame);
				nextAnimationFrame = null;
			}

			clearStarsList();
			removeEventListener('resize', handleResize);
		};
	});
</script>

<canvas bind:this={canvas}></canvas>
