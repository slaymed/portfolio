<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	const { ...rest }: SVGAttributes<EventTarget> = $props();
</script>

<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
	<rect width="24" height="24" rx="6" fill="currentColor" />
	<circle cx="12" cy="12" r="6" />
	<circle cx="12" cy="12" r="3.75" fill="currentColor" />
	<circle cx="20" cy="4.75" r="1.75" />
</svg>
