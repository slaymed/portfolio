<script>
	import Button from '$lib/components/button.svelte';
	import ArrowDownTrayIcon from '$lib/icons/arrow-down-tray-icon.svelte';
	import EnvelopeIcon from '$lib/icons/envelope-icon.svelte';
</script>

<section
	class="container flex items-center py-16 leading-relaxed min-h-screen-nav-less"
>
	<div
		class="flex flex-col justify-between w-full gap-12 lg:gap-16 xl:gap-28 lg:flex-row shrink-0"
	>
		<div class="flex flex-col gap-12 shrink-0">
			<div class="flex flex-col pl-1">
				<h1
					class="text-4xl font-semibold tracking-tight break-keep sm:text-5xl xl:text-6xl"
				>
					<a href="/">Mohamed Bedr</a>
				</h1>
				<h2
					class="mt-3 text-lg font-medium tracking-tight sm:text-xl xl:text-2xl"
				>
					Senior Web Developer
				</h2>
				<p
					class="max-w-xs mt-4 leading-normal text-forground-light xl:text-lg xl:max-w-sm"
				>
					I build pixel-perfect, engaging, and accessible digital experiences.
				</p>
			</div>
			<div class="flex flex-wrap items-center max-w-lg gap-6">
				<Button
					as="a"
					href="/contact"
					class="flex-1 xl:text-lg"
					leftIcon={EnvelopeIcon}
				>
					Contact Me
				</Button>
				<Button
					class="flex-1 xl:text-lg"
					variant="secondary"
					leftIcon={ArrowDownTrayIcon}
				>
					Download Cv
				</Button>
			</div>
		</div>
		<div
			class="max-w-[620px] flex flex-col gap-4 text-forground-light xl:text-lg bg-card-light p-12 rounded-xl"
		>
			<p>
				<span class="font-medium text-forground">Back in 2018,</span> I decided to
				try my hand at creating custom Tumblr themes, diving deep into the world
				of coding and web development. Since then, I’ve had the privilege of building
				products for global companies and businesses, ranging from marketing websites
				to complex enterprise apps, always prioritizing fast, elegant, and accessible
				user experiences.
			</p>
			<p>
				<span class="font-medium text-forground">Currently,</span> my main focus
				is crafting accessible user interfaces for clients on Upwork. I find the
				most satisfaction in creating software where design and engineering converge
				— products that not only look good but are also robust under the hood.
			</p>
			<p>
				<span class="font-medium text-forground">Previously,</span> I served as Principal
				Frontend Engineer at Componly, where I developed tools and services for empowering
				design system teams to effectively monitor and manage their components.
			</p>
			<p>
				<span class="font-medium text-forground">Outside of work,</span> you’ll often
				find me diving with a harpoon gun to catch fish, hanging out with friends,
				hitting the gym, or exploring new realms in my favorite video games.
			</p>
		</div>
	</div>
</section>
