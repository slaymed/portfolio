<script lang="ts">
	import { page } from '$app/stores';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	const { href, class: className, children, ...rest }: HTMLAnchorAttributes = $props();
</script>

<a class="font-semibold {className}" {href} class:active={$page.url.pathname === href} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</a>

<style>
	.active {
		color: hsl(var(--primary-color));
	}
</style>
