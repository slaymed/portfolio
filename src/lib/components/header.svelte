<script>
	import NavLink from './nav-link.svelte';
	import GithubIcon from '$lib/icons/github-icon.svelte';
	import LinkedinIcon from '$lib/icons/linkedin-icon.svelte';
	import NavLinkActiveIcon from '$lib/icons/nav-link-active-icon.svelte';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils/cn';

	const pathname = $derived($page.url.pathname);

	const activeIconSupportedPaths = ['/', '/about', '/projects'];
</script>

<header class="h-nav">
	<div class="container relative flex items-center h-full mx-auto">
		<nav class="relative w-full">
			<NavLinkActiveIcon
				class={cn(
					'duration-100 text-[#eff2f5] -left-9 -top-12 absolute -z-10 size-36',
					{
						'left-[84px]': pathname === '/about',
						'left-[200px]': pathname === '/projects',
						'scale-0': !activeIconSupportedPaths.includes(pathname)
					}
				)}
			/>

			<ul class="flex items-center gap-16 text-lg">
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
