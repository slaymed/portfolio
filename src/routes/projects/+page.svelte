<script>
	import ConectarIcon from '$lib/icons/conectar-icon.svelte';
	import HellotaxIcon from '$lib/icons/hellotax-icon.svelte';
	import JMaxIcon from '$lib/icons/j-max-icon.svelte';
	import aofLogo from '$lib/images/aof-logo.png';
</script>

<section class="container flex flex-col items-center gap-16 py-16">
	<div class="flex flex-col items-center gap-4">
		<h1 class="text-4xl font-medium">
			<span class="text-primary">/</span>work<span class="text-primary">.</span>
		</h1>
		<p class="text-forground-light">Selected work I've taken on in the past.</p>
	</div>

	<ul class="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3">
		<li class="relative bg-card">
			<a href="/projects/hellotax" class="project__link visually__hidden__link">
				hellotax project summary.
			</a>
			<figure class="flex items-center justify-center h-60">
				<HellotaxIcon />
				<figcaption class="visually__hidden">hellotax logo.</figcaption>
			</figure>
			<div class="flex flex-col justify-center px-8 h-28 bg-card-light">
				<h5 class="text-lg font-semibold">hellotax</h5>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://app.hellotax.com"
					aria-label="hellotax live demo."
					class="text-primary whitespace-nowrap"
				>
					app.hellotax.com
				</a>
			</div>
		</li>

		<li class="relative bg-card">
			<a href="/projects/conectar" class="project__link visually__hidden__link">
				Conectar project summary.
			</a>
			<figure class="flex items-center justify-center h-60">
				<ConectarIcon />
				<figcaption class="visually__hidden">conectar logo.</figcaption>
			</figure>
			<div class="flex flex-col justify-center px-8 h-28 bg-card-light">
				<h5 class="text-lg font-semibold">Conectar</h5>
				<p class="text-primary">live soon!</p>
			</div>
		</li>

		<li class="relative bg-card">
			<a href="/projects/aof" class="project__link visually__hidden__link">
				The art of film project summary.
			</a>
			<figure class="flex items-center justify-center h-60">
				<img src={aofLogo} alt="The art of Film" class="w-52" />
				<figcaption class="visually__hidden">The art of film logo.</figcaption>
			</figure>
			<div class="flex flex-col justify-center px-8 h-28 bg-card-light">
				<h5 class="text-lg font-semibold">The art of Film</h5>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://aof-production.up.railway.app/"
					aria-label="The art of film live demo."
					class="text-primary whitespace-nowrap"
				>
					aof-production.up.railway.app
				</a>
			</div>
		</li>

		<li class="relative bg-card">
			<a href="/projects/j-max" class="project__link visually__hidden__link">
				j-max project summary.
			</a>
			<figure class="flex items-center justify-center h-60">
				<JMaxIcon />
				<figcaption class="visually__hidden">J-Max logo.</figcaption>
			</figure>
			<div class="flex flex-col justify-center px-8 h-28 bg-card-light">
				<h5 class="text-lg font-semibold">J-Max</h5>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://j-max.vercel.app/"
					aria-label="The art of film live demo."
					class="text-primary whitespace-nowrap"
				>
					j-max.vercel.app
				</a>
			</div>
		</li>
	</ul>
</section>

<style lang="scss">
	.visually__hidden {
		border: 0;
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
		white-space: nowrap;
	}

	.project__link {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 83%;
		z-index: 0;
		-webkit-transition: none;
		transition: none;

		&:focus {
			outline: none;

			& ~ figure {
				background-color: #111111;
			}
		}
	}
</style>
