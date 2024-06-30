<script>
	import '../app.css';
	import LightBulb from '$lib/components/light-bulb.svelte';
	import Header from '../lib/components/header.svelte';
	import SkipLink from '$lib/components/skip-link.svelte';
	import LightBulb2 from '$lib/components/light-bulb-2.svelte';
	import Paths from '$lib/components/paths.svelte';
	import SpaceOverlay from '$lib/components/space-overlay.svelte';
	import Contact from '$lib/components/contact.svelte';
</script>

<SkipLink />
<!-- <LightBulb /> -->
<!-- <LightBulb2 /> -->
<!-- <Paths /> -->
<!-- <SpaceOverlay /> -->

<div>
	<Header />

	<main id="main">
		<slot />
	</main>

	<Contact />
</div>
