<script>
	import AppButton from '$lib/components/app-button.svelte';
	import ProjectPreview from '$lib/components/project-preview.svelte';
	import XMarkIcon from '$lib/icons/x-mark-icon.svelte';
	import { aofImages } from './images';
</script>

<section class="container py-12">
	<div class="flex flex-col items-center gap-12 sm:gap-16 xl:gap-24">
		<h1 class="text-3xl font-semibold sm:text-4xl">The art of Film</h1>

		<ProjectPreview images={aofImages} />

		<div
			class="flex flex-col gap-8 sm:text-lg text-forground-light max-w-[960px]"
		>
			<p>
				I was hired to redevelop "The Art of Film," a large-scale e-commerce
				platform specializing in buying and selling posters, which was
				originally built on WordPress. The existing technology was insufficient
				to meet the growing demands, so I was tasked with creating a more robust
				and scalable solution using React for the frontend and Node.js for the
				server.
			</p>
			<p>
				The new site includes a comprehensive set of functionalities such as
				buying and selling, cart and orders management, shop and posters
				collection showcase, advertising, payment gateways, subscriptions,
				vouchers, orders chat, and the ability to change transaction fees based
				on different address parameters.
			</p>
			<p>
				The project involved creating a dynamic, responsive, and user-friendly
				interface using React. On the backend, I built a robust server with
				Node.js and Express, managing data with MongoDB. I focused on
				performance optimization to ensure fast load times and efficient data
				handling to accommodate a high volume of users and transactions.
				Security was a top priority, with best practices implemented to secure
				user data and transactions, including SSL encryption and secure payment
				processing. The system was designed for scalability, capable of handling
				future growth and increased traffic without compromising performance.
			</p>
			<p>
				This project demonstrates my ability to handle complex, large-scale web
				applications, utilizing modern technologies to deliver high-performance,
				user-centric solutions.
			</p>
		</div>
	</div>
</section>
