<script lang="ts">
	import type { HTMLAttributes, SVGAttributes } from 'svelte/elements';

	interface Props
		extends SVGAttributes<EventTarget>,
			HTMLAttributes<EventTarget> {
		strokeGradient?: boolean;
		fillGradient?: boolean;
	}

	const { strokeGradient, fillGradient, stroke, fill, ...rest }: Props =
		$props();
</script>

<svg
	width="22"
	height="18"
	viewBox="0 0 22 18"
	xmlns="http://www.w3.org/2000/svg"
	stroke="currentColor"
	stroke-width="2"
	{...rest}
>
	<defs>
		<radialGradient id="gradient" cx="50%" cy="65%" r="50%">
			<stop offset="0%" style="stop-color:white;stop-opacity:1" />
			<stop offset="100%" style="stop-color:#eb4a4a;stop-opacity:1" />
		</radialGradient>
	</defs>
	<path
		d="M2.33975 17L11 2L19.6603 17H2.33975Z"
		stroke={strokeGradient ? 'url(#gradient)' : stroke}
		fill={fillGradient ? 'url(#gradient)' : fill}
	/>
</svg>

<style>
	svg {
		animation: animate-svg 3s infinite;
	}

	@keyframes animate-svg {
		0% {
			transform: translate(0, 0) rotate(0);
		}

		25% {
			transform: translate(600px, 0) rotate(90deg);
		}

		50% {
			transform: translate(600px, -600px) rotate(45deg);
		}

		75% {
			transform: translate(0, -600px) rotate(180deg);
		}

		100% {
			transform: translate(0, 0) rotate(360deg);
		}
	}
</style>
