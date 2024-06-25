<script lang="ts">
	interface Props {
		images: string[];
		initialSlide?: number;
		maxWidth?: string | number;
		maxHeight?: string | number;
		hideBullets?: boolean;
	}

	const {
		maxWidth = 'none',
		maxHeight = 'none',
		hideBullets,
		images,
		initialSlide = 1
	}: Props = $props();
</script>

<div>
	{#each images as _, i}
		<input
			type="radio"
			name="slide"
			id="slide{i + 1}"
			checked={i + 1 === initialSlide}
		/>
	{/each}
	<div class="project-slider">
		<div class="slides">
			{#each images as image, i}
				<div
					class="slide"
					style="max-width: {maxWidth}; max-height: {maxHeight}"
				>
					{#if i > 0}
						<label for="slide{i}" class="prev">&#10094;</label>
					{/if}
					{#if i < images.length - 1}
						<label for="slide{i + 2}" class="next">&#10095;</label>
					{/if}

					<img src={image} alt="Project Screenshot" />
				</div>
			{/each}
		</div>
	</div>

	{#if !hideBullets}
		<div class="bullets">
			{#each images as _, i}
				<label for="slide{i + 1}" data-index={i + 1}></label>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	@keyframes fade-in {
		to {
			opacity: 1;
		}
	}

	.project-slider {
		overflow: hidden;
		user-select: none;
	}

	.slides {
		display: flex;
		transition: transform 0.25s;
		transform: translateX(calc(-100% * (var(--current-slide) - 1)));
	}

	.slide {
		position: relative;
		flex: 1 0 100%;
		flex-shrink: 0;
		height: fit-content;

		& > .prev,
		& > .next {
			top: 50%;
			position: absolute;
			transform: translateY(-50%);
			padding: 12px;
			opacity: 0;
			animation: fade-in 0s 0.1s forwards;
			background-color: rgba(0, 0, 0, 0.75);
			cursor: pointer;
			font-size: large;
		}

		& > .prev {
			left: 0;
			border-top-right-radius: 4px;
			border-bottom-right-radius: 4px;
		}

		& > .next {
			right: 0;
			border-top-left-radius: 4px;
			border-bottom-left-radius: 4px;
		}

		& > img {
			object-fit: contain;
			margin: 0 auto;
		}
	}

	.bullets {
		display: flex;
		justify-content: center;
		gap: 8px;
		margin-top: 32px;

		& > label {
			width: 12px;
			height: 12px;
			border-radius: 12px;
			background-color: #a9a9a9;
			transition: 0.5s;
			cursor: pointer;

			&:hover {
				transform: scale(1.5);
			}
		}
	}

	input[name='slide'] {
		display: none;

		@for $i from 1 through 20 {
			&:nth-of-type(#{$i}):checked {
				& ~ .project-slider {
					--current-slide: #{$i};
				}

				& ~ .bullets > label[data-index='#{$i}'] {
					background-color: hsl(var(--primary-color));
				}
			}
		}
	}
</style>
