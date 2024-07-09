<script>
	import Contact from './contact.svelte';
</script>

<div id="contact" class="fixed inset-0 z-10 hidden">
	<a href="#main" class="fixed inset-0 bg-black/75 visually__hidden__link">
		Close contact form
	</a>
	<Contact />
</div>

<style>
	#contact:target {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
