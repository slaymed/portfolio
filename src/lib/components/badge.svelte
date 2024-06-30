<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	const {
		class: className,
		children,
		...rest
	}: HTMLAttributes<EventTarget> = $props();
</script>

<div
	class="flex items-center rounded-full bg-primary/10 gap-3 px-3 py-2 leading-5 text-primary {className}"
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</div>
