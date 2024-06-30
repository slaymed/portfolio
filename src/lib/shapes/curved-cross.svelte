<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	const { ...rest }: SVGAttributes<EventTarget> = $props();
</script>

<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...rest}>
	<path
		d="M 12,0 C 12,6 6,12 0,12 C 6,12 12,18 12,24 C 12,18 18,12 24,12 C 18,12 12,6 12,0 Z"
	/>
</svg>
