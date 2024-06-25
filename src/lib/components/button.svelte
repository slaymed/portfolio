<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: 'primary' | 'secondary';
	}

	const { children, variant = 'primary', class: className, ...rest }: Props = $props();
</script>

<button class="flex items-center px-8 py-3 w-fit {className} {variant}" {...rest}>
	{#if children}
		{@render children()}
	{/if}
</button>

<style>
	.primary {
		background-color: hsl(var(--primary-color));
		border: 2px solid hsl(var(--primary-color));
	}

	.secondary {
		border-width: 2px;
		border-style: solid;
		border-color: hsl(var(--primary-color));
	}
</style>
