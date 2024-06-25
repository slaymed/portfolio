<script>
	import '../app.css';
	import LightBulb from '$lib/components/light-bulb.svelte';
	import Header from '../lib/components/header.svelte';
	import SkipLink from '$lib/components/skip-link.svelte';
</script>

<SkipLink />
<LightBulb />

<div>
	<Header />

	<main id="main">
		<slot />
	</main>
</div>
