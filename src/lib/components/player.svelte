<div class="players__container">
	<input type="radio" name="player" id="p__1" checked={true} />
	<input type="radio" name="player" id="p__2" />
	<input type="radio" name="player" id="p__3" />

	<div class="players__navigation">
		<label for="p__1"></label>
		<label for="p__2"></label>
		<label for="p__3"></label>
	</div>

	<div class="players__slider">
		<canvas></canvas>
		<canvas></canvas>
		<canvas></canvas>
	</div>
</div>

<style lang="scss">
	.players__container {
		overflow: hidden;
		position: relative;
		width: 100%;
		height: 148px;
		border-radius: 12px;
		background: hsl(var(--card-color));
		border: 1px solid hsl(var(--border-color) / 0.4);
	}

	.players__slider {
		--current-player: 0;

		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		transition: transform 0.25s;
		transform: translateY(calc(-100% * (var(--current-player) - 1)));

		& canvas {
			transition: transform 0.25s;
			width: 100%;
			height: 100%;
		}
	}

	.players__navigation {
		position: absolute;
		top: 50%;
		left: 12px;
		display: flex;
		gap: 12px;
		flex-direction: column;
		border-radius: 24px;
		background-color: hsl(var(--card-light-color) / 0.4);
		padding: 6px;
		transform: translateY(-50%);
		z-index: 10;

		& label {
			width: 6px;
			height: 6px;
			cursor: pointer;
			border-radius: 50%;
			background: hsl(var(--forground-color) / 0.2);
			transition:
				transform 0.3s ease-in-out,
				background 0.3s ease-in-out;
		}
	}

	input[type='radio'][name='player'] {
		display: none;

		@for $i from 1 through 3 {
			&:nth-of-type(#{$i}):not(:checked) {
				& ~ .players__slider > canvas:nth-of-type(#{$i}) {
					transform: scale(0.5);
				}
			}

			&:nth-of-type(#{$i}):checked {
				& ~ .players__slider {
					--current-player: #{$i};
				}

				& ~ .players__navigation > label[for='p__#{$i}'] {
					transform: scale(1.5);
					background: hsl(var(--primary-color));
				}
			}
		}
	}
</style>
