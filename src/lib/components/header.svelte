<script>
	import NavLink from './nav-link.svelte';
	import GithubIcon from '$lib/icons/github-icon.svelte';
	import LinkedinIcon from '$lib/icons/linkedin-icon.svelte';
	import Logo from '../icons/bird-icon.svelte';

	import { page } from '$app/stores';
</script>

<header class="h-nav">
	<div class="container relative flex items-center h-full mx-auto">
		<nav class="w-full">
			<ul class="flex items-center gap-12 text-lg">
				<li class="duration-300 hover:text-primary">
					<NavLink href="/">Home</NavLink>
				</li>
				<li class="duration-300 hover:text-primary">
					<NavLink href="/about">About</NavLink>
				</li>
				<li class="duration-300 hover:text-primary">
					<NavLink href="/projects">Projects</NavLink>
				</li>
			</ul>
		</nav>

		<!-- <span class="hidden lg:block mt-14 text-9xl text-primary">*</span> -->

		<ul class="flex items-center justify-end w-full gap-6">
			<li class="duration-300 hover:text-primary">
				<a href="https://github.com/slaymed" target="_blank">
					<GithubIcon width="32" height="32" />
				</a>
			</li>
			<li class="duration-300 hover:text-primary">
				<a
					href="https://www.linkedin.com/in/mohamed-bedr-52a067296/"
					target="_blank"
				>
					<LinkedinIcon width="28" height="28" />
				</a>
			</li>
		</ul>
	</div>
</header>
