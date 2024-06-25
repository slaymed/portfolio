<script>
	import ProjectPreview from '$lib/components/project-preview.svelte';
	import { hellotaxImages } from './images';
</script>

<div class="container py-12">
	<div class="flex flex-col items-center gap-12 sm:gap-16 xl:gap-24">
		<h1 class="text-3xl font-semibold sm:text-4xl">hellotax</h1>

		<ProjectPreview images={hellotaxImages} />

		<div
			class="flex flex-col gap-8 sm:text-lg text-forground-light max-w-[960px]"
		>
			<p>
				hellotax is a VAT compliance automation software tailored towards
				multi-channel traders across Europe.
			</p>
			<p>
				The company already had a functioning web app but needed a professional
				to create an entirely new experience with the latest technologies to
				leverage speed and provide an optimal user experience as their customers
				were increasing. At the core of the product is data so there was heavy
				data transformation and manipulation involved and they needed to make
				that process as fast as possible.
			</p>
			<p>
				With this information in mind, I examined the existing platform, started
				documenting flaws and identifying strategies to tackle them. We settled
				to use Vue as their in-house team was more familiar with it. I
				bootstrapped the project, and within a few weeks the designated MVP
				which included a partial component library optimized for accessibility
				was ready.
			</p>
			<p>
				Usually, systems that require loads of data manipulation and all sorts
				of computations settle to perform these operations server-side. But
				since we were dealing with really huge data (reaching megabytes at
				times), the round trip time (RTT) was in high numbers which resulted in
				delayed updates. To tackle this, I had to implement a lot of the
				processing and manipulation logic on the frontend, leaving special
				computation work and business logic for the backend.
			</p>
			<p>
				Now, it's easy to go wrong and pollute data in these computations which
				made it clear that we needed solid assertion mechanisms so I created a
				bunch of fail-safe optimized utility libraries which implemented solid
				type-checks and validation techniques to ensure fast, yet accurate data
				diffing and transformation work to preserve the integrity of the
				information displayed and minimize runtime errors and unusability.
			</p>
			<p>
				After nine months of work, we were finally ready to go live and the beta
				version was launched. It not only met but exceeded the expectations and
				beat the previous version at speed, accessibility and reliabilty.
			</p>
		</div>
	</div>
</div>
