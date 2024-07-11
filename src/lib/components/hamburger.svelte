<script>
	import { cn } from '$lib/utils/cn';

	let x = $state(false);

	function toggle() {
		x = !x;
	}
</script>

<button
	type="button"
	aria-label="Open contact menu"
	aria-controls="contact-menu"
	aria-expanded="false"
	class={cn('menu-toggle', { x })}
	onclick={toggle}
></button>

<style>
	.menu-toggle {
		z-index: 999;
		width: 4em;
		height: 1em;
		background: none;
		position: relative;
		display: -webkit-inline-box;
		display: -webkit-inline-flex;
		display: -ms-flexbox;
		display: inline-flex;
		color: hsl(var(--primary-color));
	}

	.menu-toggle:before,
	.menu-toggle:after {
		content: '';
		width: 100%;
		height: 2px;
		position: absolute;
		transition: 0.2s ease;
		transform: rotate(0deg);
		background-color: currentColor;
	}

	.menu-toggle:before {
		top: 0;
	}

	.menu-toggle:after {
		left: 0;
		width: 72%;
		top: 0.8em;
	}

	.menu-toggle.x:before {
		transform: translateY(4px) rotate(-45deg);
	}

	.menu-toggle.x:after {
		top: 0;
		width: 100%;
		transform: translateY(4px) rotate(45deg);
	}
</style>
