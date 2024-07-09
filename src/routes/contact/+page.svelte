<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import EnvelopeIcon from '$lib/icons/envelope-icon.svelte';
	import MapPin from '$lib/icons/map-pin.svelte';
	import PaperAirplain from '$lib/icons/paper-airplain.svelte';
	import SpinnerIcon from '$lib/icons/spinner-icon.svelte';
	import PhoneIcon from '$lib/icons/phone-icon.svelte';
	import Toast from '$lib/components/toast.svelte';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	let loading = $state(false);

	const { data } = $props();
	const status = $derived($page.url.searchParams.get('status'));

	const toast = {
		success: {
			variant: 'success',
			message: 'Your message has been sent successfully.'
		},
		failed: {
			variant: 'error',
			message: 'Something went wrong.'
		}
	} as const;
</script>

{#snippet ContactInfo(info, icon)}
	<li class="flex items-center gap-3">
		<span class="text-white block p-2.5 rounded-full w-fit bg-primary">
			<svelte:component this={icon}></svelte:component>
		</span>
		<span class="text-[17px]">
			{info}
		</span>
	</li>
{/snippet}

<section
	class="container flex items-center justify-between min-h-screen-nav-less"
>
	<div class="flex flex-col gap-8">
		<div class="flex flex-col gap-4">
			<p class="text-3xl">Get in Touch</p>
			<h1 class="max-w-[600px] font-medium text-8xl">
				<span class="text-">Let's Discuss</span> Your Ideas
			</h1>
		</div>

		<h2 class="text-3xl text-primary">
			<span class="text-4xl">&</span> Turn them to reality
		</h2>

		<p class="max-w-md text-lg leading-7">
			Contact me For questions, technical assistance, or collaboration
			opportunities via the contact information provided.
		</p>

		<ul class="flex flex-col gap-4 mt-4">
			{@render ContactInfo('+213 669859298', PhoneIcon)}
			{@render ContactInfo('hello@mohamedbedr.com', EnvelopeIcon)}
			{@render ContactInfo('02 15, City 400 logts, Damous, DZ 42014', MapPin)}
		</ul>
	</div>

	<div class="w-full h-full max-w-lg p-12 rounded-xl bg-card-light">
		<form
			method="POST"
			use:enhance={() => {
				loading = true;
				return async ({ update }) => {
					await update();
					loading = false;
				};
			}}
		>
			<div class="flex flex-col gap-2">
				<label for="name">Name</label>
				<input id="name" type="text" name="name" value={data.name} />
			</div>
			<div class="flex flex-col gap-2">
				<label for="email">Email</label>
				<input id="email" type="email" name="email" value={data.email} />
			</div>
			<div class="flex flex-col gap-2">
				<label for="message">Message</label>
				<textarea id="message" name="message" rows="8" value={data.message}
				></textarea>
			</div>

			<Button
				type="submit"
				class="mt-8 w-fit"
				rightIcon={loading ? SpinnerIcon : PaperAirplain}
			>
				Submit
			</Button>
		</form>
	</div>
</section>

{#if status === 'success' || status === 'failed'}
	<div class="toast">
		<Toast
			variant={toast[status].variant}
			message={toast[status].message}
			href="/contact"
		/>
	</div>
{/if}

<style>
	.toast {
		position: fixed;
		right: 16px;
		bottom: 16px;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
		height: 100%;
	}

	input,
	textarea {
		border-radius: 12px;
		padding: 12px 16px;
		color: black;
	}

	textarea {
		resize: none;
	}
</style>
