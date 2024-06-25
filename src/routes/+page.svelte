<script>
	import Badge from '$lib/components/badge.svelte';
	import Button from '$lib/components/button.svelte';
	import avatar from '$lib/images/avatar.svg';
</script>

<section
	class="container relative flex flex-col justify-center py-16 min-h-screen-nav-less"
>
	<div
		class="hidden xl:flex items-center absolute top-0 w-full h-full max-w-[72%] -z-10 left-1/4"
	>
		<div class="flex flex-col items-center gap-4 mx-auto">
			<Badge class="font-serif text-xl">elFertas</Badge>
			<img src={avatar} alt="Avatar" class="h-64" />
		</div>
	</div>
	<div class="flex">
		<div class="flex flex-col justify-center flex-1 gap-16">
			<div class="flex flex-col gap-8">
				<div class="flex flex-col gap-4">
					<p class="text-3xl">Hey there,</p>
					<h1 class="font-medium text-8xl max-w-[560px]">I'm Bedr Mohamed</h1>
				</div>
				<h2 class="text-3xl text-primary">- Web Developer</h2>
				<p class="max-w-[540px] text-lg">
					Web development is the art of crafting user-friendly and visually
					appealing websites and applications, ensuring a seamless and engaging
					online experience.
				</p>
			</div>
			<Button class="text-lg">Get in touch</Button>
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
