<script lang="ts">
	import CurvedCross from '$lib/shapes/curved-cross.svelte';
	import Polygon from '$lib/shapes/polygon.svelte';

	const gradient = ['#eb4a4a', '#ffffff'];

	let strokeGradient = $state<string[]>();
	let fillGradient = $state<string[]>();
	let usingFillGradient = $state(false);

	function toggle() {
		if (usingFillGradient) {
			strokeGradient = gradient;
			fillGradient = undefined;
		} else {
			fillGradient = gradient;
			strokeGradient = undefined;
		}
	}

	function animate() {}

	$effect(() => {});
</script>

<div class="fixed inset-0 -z-10">
	<CurvedCross class="absolute left-2 text-primary" />
	<CurvedCross class="absolute left-8" />
	<Polygon
		strokeGradient
		stroke-width="1"
		class="absolute w-64 h-64 bottom-20 left-64"
	/>
</div>

<div class="fixed inset-0 backdrop-blur-lg -z-10"></div>

<button class="fixed z-50 right-10 bottom-10" onclick={toggle}>Toggle</button>
