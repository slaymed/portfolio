<script lang="ts">
	let circle: HTMLDivElement;

	function onmousemove({ clientX, clientY }: MouseEvent) {
		circle.style.background = `
      radial-gradient(
      300px circle at ${clientX}px ${clientY}px,
      rgba(29, 78, 216, 0.15),
      transparent 80%
    )`;
	}

	$effect(() => {
		window.addEventListener('mousemove', onmousemove);

		return () => {
			window.removeEventListener('mousemove', onmousemove);
		};
	});
</script>

<div
	bind:this={circle}
	class="fixed inset-0 transition duration-300 pointer-events-none -z-10"
></div>

<style>
	div {
		background: radial-gradient(
			400px circle at 0px 0px,
			rgba(29, 78, 216, 0.15),
			transparent 80%
		);
	}
</style>
