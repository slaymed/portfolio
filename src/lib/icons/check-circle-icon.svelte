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
			d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
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
			d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
			clip-rule="evenodd"
		/>
	</svg>
{/if}
