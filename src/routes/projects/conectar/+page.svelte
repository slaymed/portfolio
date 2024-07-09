<script>
	import ProjectPreview from '$lib/components/project-preview.svelte';
	import { conectarImages } from './images';
</script>

<section class="container py-12">
	<div class="flex flex-col items-center gap-12 sm:gap-16 xl:gap-24">
		<h1 class="text-3xl font-semibold sm:text-4xl">Conectar</h1>

		<ProjectPreview images={conectarImages} />

		<div
			class="flex flex-col gap-8 sm:text-lg text-forground-light max-w-[960px]"
		>
			<p>
				Conectar is an e-learning platform that connects people looking to learn
				English to professional native English speakers. We had to bring the
				entire classroom experience to the web and make it feel as immersive as
				possible.
			</p>
			<p>
				To achieve that, we needed to build multiple apps into the system like
				comms video, audio, messagging, a scheduling system for appointments etc
				so I joined the company as a Frontend Engineer to build these products.
			</p>
			<p>
				User experience was quite critical for a learning platform so I got a
				professional to whip up a new identity and mockups, drafted a proposal,
				based on that I built the design system and a brand new marketing site
				following those guidelines.
			</p>
			<p>
				I designed all the UIs on the dashboard integrating REST APIs and built
				the front-end of major apps from the ground up like the messaging system
				which was based off of the API from our Rails backend. It was quite
				challenging integrating all these features while keeping an eye out for
				performance and usability. There were back-and-forths but eventually it
				was stable and had a bunch of the core features of Facebook Messenger
				which was really beautiful.
			</p>
			<p>
				I also worked with a colleague to build an appointment scheduling system
				for the product then went ahead to work on the classroom app which had
				lots of interesting features like a customizable realtime whiteboard
				built totally from scratch, video and audio comms and other tools to
				facilitate seamless tutor-student interaction.
			</p>
			<p>
				The project was huge and housed hundreds of thousands of lines of code
				powered by multiple technologies like React, Rails, Sass, Redux,
				Webpacker, GoLang, Java etc and we often had to re-evaluate strategies
				regarding certain topics like state management, performance and
				development workflow. I was able to work across different segments from
				design to DevOps to strategy and implementation.
			</p>
			<p>
				I was the Lead Frontend engineer so I got to work with other engineers
				and contractors on various tools. It certainly was a great learning
				experience. Unfortunately, the product hasn't made it yet to the real
				world and I absolutely hope that it does someday.
			</p>
		</div>
	</div>
</section>
