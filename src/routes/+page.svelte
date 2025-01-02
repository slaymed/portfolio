<script>
	import Button from '$lib/components/button.svelte';
	import BirdIcon from '$lib/icons/bird-icon.svelte';
	import ArrowRightIcon from '$lib/icons/arrow-right-icon.svelte';
	import IdeaIcon from '$lib/icons/idea-icon.svelte';
	import AvatarIcon from '$lib/icons/avatar-icon.svelte';
	import SpaceCanvas from '$lib/components/space-canvas/space-canvas.svelte';
	import BackgroundPattren from '$lib/components/background-pattren.svelte';
</script>

<div class="pointer-events-none fixed inset-0 -z-10">
	<SpaceCanvas />
</div>

<section
	class="container relative flex min-h-screen-nav-less flex-col justify-center overflow-hidden pb-16 sm:pt-16"
>
	<div
		class="absolute left-1/4 top-0 -z-10 hidden h-full w-full max-w-[72%] items-center xl:flex"
	>
		<div class="relative mx-auto flex flex-col items-center gap-4 text-primary">
			<BackgroundPattren
				width="600"
				height="600"
				stroke-width="0.1"
				class="absolute -top-[170px] -z-10 rotate-[80deg] text-forground-light/15"
			/>
			<div class="absolute -left-10 -top-20">
				<IdeaIcon class="size-24 text-card-light" />
				<BirdIcon class="avatar-bird" />
			</div>
			<AvatarIcon class="size-64" />
		</div>
	</div>
	<div class="flex">
		<div class="flex flex-1 flex-col justify-center gap-12 sm:gap-16">
			<div class="flex flex-col gap-8">
				<div class="relative flex w-fit flex-col gap-4">
					<p class="text-2xl sm:text-3xl">Hey there,</p>
					<h1
						class="title max-w-[497.4px] text-6xl font-semibold sm:text-8xl"
						title="Mohamed Bedr"
						aria-label="Mohamed bedr"
					>
						<span class="tracking-tighter">I'm</span> Bedr
						<span class="tracking-widest">Mohamed</span>
					</h1>
				</div>
				<h2 class="text-3xl text-primary">
					<span class="text-4xl">-</span> Web Developer
				</h2>
				<p class="max-w-[540px] text-lg text-accent">
					Web development is the art of crafting user-friendly and visually
					appealing websites and applications, ensuring a seamless and engaging
					online experience.
				</p>
			</div>
			<Button
				as="a"
				href="/contact"
				class="max-w-52 text-lg"
				RightIcon={ArrowRightIcon}
			>
				Get in touch
			</Button>
		</div>
		<div class="hidden flex-1 flex-col items-end justify-center gap-20 lg:flex">
			<div class="flex flex-col items-end">
				<div class="flex items-center gap-4">
					<p class="text-[84px] leading-[1]">6</p>
					<span class="text-6xl font-semibold text-primary">+</span>
				</div>
				<p class="max-w-[540px] text-lg">Years of experience</p>
			</div>
			<div class="flex-col items-end">
				<div class="flex items-center gap-4">
					<p class="text-[84px] leading-[1]">120</p>
					<span class="text-6xl font-semibold text-primary">+</span>
				</div>
				<p class="max-w-[540px] text-lg">Completed projects</p>
			</div>
			<div class="flex flex-col items-end">
				<div class="flex items-center gap-4">
					<p class="text-[84px] leading-[1]">80</p>
					<span class="text-6xl font-semibold text-primary">+</span>
				</div>
				<p class="max-w-[540px] text-lg">Satisfied clients</p>
			</div>
		</div>
	</div>
</section>

<style>
	:global(.avatar-bird) {
		position: absolute;
		top: 22%;
		left: 29%;
		width: 40px;
		height: 40px;
	}

	@media (max-width: 375px) {
		.title {
			font-size: 15vw;
		}
	}

	@media (min-width: 376px) and (max-width: 540px) {
		.title {
			font-size: 17vw;
		}
	}

	@media (min-width: 541px) and (max-width: 639px) {
		.title {
			font-size: 15vw;
		}
	}
</style>
