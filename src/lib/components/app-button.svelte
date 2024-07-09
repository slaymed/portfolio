<script lang="ts">
	import type { Component } from 'svelte';
	import type { HTMLButtonAttributes, SVGAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		leftIcon: Component<SVGAttributes<EventTarget>>;
	}

	const { leftIcon, form, children, ...rest }: Props = $props();
</script>

<button
	class="flex items-center gap-2 p-2 bg-forground text-background"
	{...rest}
>
	{#if Boolean(leftIcon)}
		<span class="bg-red-500">
			<svelte:component this={leftIcon} />
		</span>
	{/if}

	{#if children}
		{@render children()}
	{/if}
</button>
