<script lang="ts">
	import AofIcon from '$lib/icons/aof-icon.svelte';
	import ConectarIcon from '$lib/icons/conectar-icon.svelte';
	import HellotaxIcon from '$lib/icons/hellotax-icon.svelte';
	import JMaxIcon from '$lib/icons/j-max-icon.svelte';
</script>

{#snippet ProjectCard(name: string, path: string, domain: any, Icon: any)}
	<li class="work__card">
		<a href="/projects/{path}" class="project__link visually__hidden__link">
			{name} project summary.
		</a>
		<figure class="flex h-60 items-center justify-center">
			<Icon />
			<figcaption class="visually__hidden">{name} logo.</figcaption>
		</figure>
		<div class="flex h-28 flex-col justify-center bg-card-light px-8">
			<h5 class="text-lg font-semibold">{name}</h5>

			{#if domain}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://{domain}/"
					aria-label="hellotax live demo."
					class="whitespace-nowrap text-primary"
				>
					{domain}
				</a>
			{/if}

			{#if !domain}
				<p class="text-primary">live soon!</p>
			{/if}
		</div>
	</li>
{/snippet}

<section
	class="container flex flex-col items-center gap-16 pb-16 pt-8 sm:pt-16"
>
	<div class="flex flex-col items-center gap-4">
		<h1 class="text-4xl font-medium">
			<span class="text-primary">/</span>work<span class="text-primary">.</span>
		</h1>
		<p class="text-forground-light">Selected work I've taken on in the past.</p>
	</div>

	<ul class="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3">
		{@render ProjectCard(
			'Hellotax',
			'hellotax',
			'app.hellotax.com',
			HellotaxIcon
		)}
		{@render ProjectCard('Conectar', 'conectar', null, ConectarIcon)}
		{@render ProjectCard(
			'The art of film',
			'aof',
			'aof-production.up.railway.app',
			AofIcon
		)}
		{@render ProjectCard('J-Max', 'j-max', 'j-max.vercel.app', JMaxIcon)}
	</ul>
</section>

<style lang="scss">
	.work__card {
		position: relative;
		border: 1px solid hsl(var(--border-color));
		background-color: hsl(var(--card-color));
		border-radius: 10px;
		overflow: hidden;
	}

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
