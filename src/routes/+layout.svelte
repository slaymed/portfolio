<script>
	import '../app.css';
	import Header from '../lib/components/header.svelte';
	import SkipLink from '$lib/components/skip-link.svelte';
	import BackgroundPattren from '$lib/components/background-pattren.svelte';
</script>

<SkipLink />
<BackgroundPattren
	width="1920"
	height="1920"
	stroke-width="0.08"
	class="fixed -z-10 -top-[42%] sm:left-[31%] text-[#c4c4c4] dark:text-[#2e2e2e]"
/>
<div>
	<Header />
	<main id="main">
		<slot />
	</main>
</div>
