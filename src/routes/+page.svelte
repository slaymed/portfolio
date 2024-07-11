<script>
	import Button from '$lib/components/button.svelte';
	import BirdIcon from '$lib/icons/bird-icon.svelte';
	import ArrowRightIcon from '$lib/icons/arrow-right-icon.svelte';
	import IdeaIcon from '$lib/icons/idea-icon.svelte';
	import AvatarIcon from '$lib/icons/avatar-icon.svelte';
	import SpaceCanvas from '$lib/components/space-canvas/space-canvas.svelte';
	import BackgroundPattren from '$lib/components/background-pattren.svelte';
</script>

<div class="fixed inset-0 pointer-events-none -z-10">
	<SpaceCanvas />
</div>
<!-- text-[#c4c4c4] dark:text-[#2e2e2e] -->
<BackgroundPattren
	width="1920"
	height="1920"
	stroke-width="0.06"
	class="fixed -z-10 -top-[42%] sm:left-[31%] text-forground-light/15"
/>

<section
	class="container relative flex flex-col justify-center pb-16 sm:pt-16 min-h-screen-nav-less"
>
	<div
		class="hidden xl:flex items-center absolute top-0 w-full h-full max-w-[72%] -z-10 left-1/4"
	>
		<div class="relative flex flex-col items-center gap-4 mx-auto text-primary">
			<div class="absolute -left-10 -top-20">
				<IdeaIcon class="size-24 text-card-light" />
				<BirdIcon class="avatar-bird" />
			</div>
			<AvatarIcon class="size-64" />
		</div>
	</div>
	<div class="flex">
		<div class="flex flex-col justify-center flex-1 gap-12 sm:gap-16">
			<div class="flex flex-col gap-8">
				<div class="relative flex flex-col gap-4 w-fit">
					<p class="text-2xl sm:text-3xl">Hey there,</p>
					<h1
						class="title font-semibold text-6xl sm:text-8xl max-w-[497.4px]"
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
				class="text-lg max-w-52"
				rightIcon={ArrowRightIcon}
			>
				Get in touch
			</Button>
		</div>
		<div class="flex-col items-end justify-center flex-1 hidden gap-20 lg:flex">
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
