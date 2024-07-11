<script>
	import Button from '$lib/components/button.svelte';
	import ArrowDownTrayIcon from '$lib/icons/arrow-down-tray-icon.svelte';
	import EnvelopeIcon from '$lib/icons/envelope-icon.svelte';
</script>

{#snippet Platform(title, description)}
	<div class="platform">
		<p class="font-medium text-forground">{title}</p>
		<p>{description}</p>
	</div>
{/snippet}

<section
	class="container justify-between pt-8 pb-16 sm:pt-16 text-forground-light"
>
	<div class="flex flex-col gap-16 lg:flex-row">
		<div class="flex flex-col gap-10 xl:text-lg">
			<div class="flex flex-col gap-2">
				<p class="text-xl font-medium text-forground">About me</p>
				<p>
					Keeping it real, making use of modern tools and methodologies to
					accelerate business growth and establishing unfair advantages.
				</p>
			</div>
			<div class="flex flex-col gap-4">
				<p>
					<span class="font-medium text-forground">Back in 2018,</span> I decided
					to try my hand at creating custom Tumblr themes, diving deep into the world
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
					<span class="font-medium text-forground">Previously,</span> I served as
					Principal Frontend Engineer at Componly, where I developed tools and services
					for empowering design system teams to effectively monitor and manage their
					components.
				</p>
				<p>
					<span class="font-medium text-forground">Outside of work,</span> you’ll
					often find me diving with a harpoon gun to catch fish, hanging out with
					friends, hitting the gym, or exploring new realms in my favorite video
					games.
				</p>
			</div>

			<div
				class="flex-col gap-8 p-8 2xl:p-12 call__to__action 2xl:gap-12 xl:flex-row"
			>
				<p class="text-2xl font-bold text-center 2xl:text-4xl text-forground">
					Start a project
				</p>

				<p class="max-w-lg text-base text-center 2xl:text-lg text-forground">
					Interested in working together? We should queue up a time to chat.
					I’ll buy the coffee.
				</p>

				<Button
					as="a"
					href="/contact"
					class="flex-1 xl:text-lg"
					variant="secondary"
					leftIcon={EnvelopeIcon}
					fullRadius
				>
					Contact Me
				</Button>
			</div>
		</div>

		<div
			class="flex flex-col w-full gap-6 lg:max-w-xs shrink-0 text-forground-light"
		>
			<div class="flex flex-col gap-2">
				<p class="text-xl font-medium text-forground">Tools & Platforms</p>
				<p>Here is the list of the tools and platforms that i use.</p>
			</div>

			<div class="flex flex-col gap-4">
				{@render Platform('Languages', 'JavaScript/Node, C#, Java, Rust')}
				{@render Platform(
					'Frameworks',
					'Serverless Framework, AWS Amplify, React, Next.js, React Native, Svelte, Sveltekit, Tailwind CSS'
				)}
				{@render Platform(
					'DevOps',
					'GitHub, Docker, Kubernetes, Ansible, Terraform, Pulumi, GitLab, Jenkins, Circle CI'
				)}
				{@render Platform(
					'Tools',
					'Sanity CMS, Algolia, GraphQL, Airtable, Zapier'
				)}
				{@render Platform(
					'Platforms',
					'Amazon Web Services (Lambda, DynamoDB, SQS, Kinesis, S3, API Gateway, ECS/Fargate) Microsoft Azure Google Cloud Platform'
				)}
				{@render Platform(
					'Big Data',
					'Apache Kafka, Apache Storm, Elasticsearch, Hadoop'
				)}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.platform {
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: 14px;
		font-size: 14px;
		border-radius: 8px;
		background-color: hsl(var(--card-light-color));
		border: 1px solid hsl(var(--border-color));
	}

	.call__to__action {
		margin-top: 18px;
		display: flex;
		align-items: center;
		border-radius: 10px;
		background-color: hsl(var(--card-color));
		border: 1px solid hsl(var(--border-color));
	}
</style>
