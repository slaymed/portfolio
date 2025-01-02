<script lang="ts">
	import type { Component } from 'svelte';
	import type { HTMLButtonAttributes, SVGAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		LeftIcon: Component<SVGAttributes<EventTarget>>;
	}

	const { LeftIcon, form, children, ...rest }: Props = $props();
</script>

<button
	class="flex items-center gap-2 bg-forground p-2 text-background"
	{...rest}
>
	{#if Boolean(LeftIcon)}
		<span class="bg-red-500">
			<LeftIcon />
		</span>
	{/if}

	{#if children}
		{@render children()}
	{/if}
</button>
