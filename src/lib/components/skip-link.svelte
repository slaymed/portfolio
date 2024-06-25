<script lang="ts">
	function handleClick(e: MouseEvent) {
		if (e.target instanceof HTMLAnchorElement) {
			e.target.blur();
		}
	}
</script>

<a onclick={handleClick} href="#main" id="skip-link">Skip to content</a>

<style>
	#skip-link:focus {
		top: 0;
		left: 0;
		outline: none;
	}

	#skip-link {
		top: -4em;
		z-index: 1001;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		padding: 8px 15px;
		font-size: 14.5px;
		position: absolute;
		-webkit-transition: top 0.2s;
		transition: top 0.2s;
		color: hsl(var(--forground-color));
		background: hsl(var(--primary-color));
		border-bottom-right-radius: 3px;
	}
</style>
