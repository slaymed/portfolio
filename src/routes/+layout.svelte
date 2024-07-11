<script>
	import '../app.css';
	import Header from '../lib/components/header.svelte';
	import SkipLink from '$lib/components/skip-link.svelte';
</script>

<SkipLink />
<div>
	<Header />
	<main id="main">
		<slot />
	</main>
</div>
