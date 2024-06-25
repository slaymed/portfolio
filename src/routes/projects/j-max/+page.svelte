<script>
	import ProjectPreview from '$lib/components/project-preview.svelte';
	import { jmaxImages } from './images';
</script>

<div class="container py-12">
	<div class="flex flex-col items-center gap-12 sm:gap-16 xl:gap-24">
		<h1 class="text-3xl font-semibold sm:text-4xl">J-Max</h1>

		<ProjectPreview images={jmaxImages} />

		<div
			class="flex flex-col gap-8 sm:text-lg text-forground-light max-w-[960px]"
		>
			<p>
				I was responsible for designing and developing the website for J-Max
				Developers, a team renowned for their expertise in creating landing
				pages, e-commerce stores, and general websites. The project involved
				crafting a pixel-perfect match to the provided design specifications,
				ensuring that every visual element was accurately rendered.
			</p>

			<p>
				Using Next.js, I built a high-performance website that leverages
				server-side rendering for improved speed and SEO. The development
				process involved writing clean, modular, and maintainable code, with a
				strong emphasis on responsiveness. The website was rigorously tested
				across various devices and browsers to guarantee a seamless user
				experience, whether accessed on a desktop, tablet, or smartphone.
			</p>

			<p>
				This project showcases my ability to deliver high-quality, responsive
				web applications using modern frameworks and tools, adhering to best
				practices in web development.
			</p>
		</div>
	</div>
</div>
