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
	class="container justify-between pb-16 pt-8 text-forground-light sm:pt-16"
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
				class="call__to__action flex-col gap-8 p-8 xl:flex-row 2xl:gap-12 2xl:p-12"
			>
				<p class="text-center text-2xl font-bold text-forground 2xl:text-4xl">
					Start a project
				</p>

				<p class="max-w-lg text-center text-base text-forground 2xl:text-lg">
					Interested in working together? We should queue up a time to chat.
					I’ll buy the coffee.
				</p>

				<Button
					as="a"
					href="/contact"
					class="flex-1 xl:text-lg"
					variant="secondary"
					LeftIcon={EnvelopeIcon}
					fullRadius
				>
					Contact Me
				</Button>
			</div>
		</div>

		<div
			class="flex w-full shrink-0 flex-col gap-6 text-forground-light lg:max-w-xs"
		>
			<div class="flex flex-col gap-2">
				<p class="text-xl font-medium text-forground">Tools & Platforms</p>
				<p>Here is the list of the tools and platforms that i use.</p>
			</div>

			<div class="flex flex-col gap-4">
				{@render Platform('Languages', 'JavaScript/Node, C#, Java, Rust')}
				{@render Platform(
					'Front-End',
					'React, Next.js, React Native, Svelte, Sveltekit, Tailwind CSS'
				)}
				{@render Platform(
					'Back-End',
					'NestJS, Express, Fastify, WebSockets, GraphQL, Spring Boot, Xamarin, Rocket'
				)}
				{@render Platform(
					'DevOps & Deployment',
					'Serverless Framework, AWS Amplify, GitHub, Docker, Kubernetes, Ansible, Terraform, Pulumi, GitLab, Jenkins, Circle CI'
				)}
				{@render Platform(
					'Platforms',
					'Amazon Web Services (Lambda, DynamoDB, SQS, Kinesis, S3, API Gateway, ECS/Fargate) Microsoft Azure Google Cloud Platform'
				)}
				{@render Platform(
					'Databases',
					'MySQL, PostgreSQL, MongoDB, SQLite, Redis, Cassandra, DynamoDB'
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
