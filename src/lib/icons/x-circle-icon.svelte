<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	interface Props extends SVGAttributes<EventTarget> {
		select?: 'outline' | 'solid';
	}

	const { select = 'solid', ...rest }: Props = $props();
</script>

{#if select === 'outline'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		{...rest}
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
		/>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
		/>
	</svg>
{/if}

{#if select === 'solid'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		width="24"
		height="24"
		{...rest}
	>
		<path
			fill-rule="evenodd"
			d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
			clip-rule="evenodd"
		/>
	</svg>
{/if}
