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
	let form = $state<HTMLFormElement>();

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
	class="container flex flex-col justify-between pt-8 gap-14 sm:pt-14 pb-14 xl:items-center xl:flex-row min-h-screen-nav-less"
>
	<div class="flex flex-col gap-8">
		<div class="flex flex-col gap-4">
			<p class="text-3xl">Get in Touch</p>
			<h1
				class="max-w-2xl text-5xl font-semibold tracking-tighter 2xl:max-w-3xl sm:text-6xl md:text-7xl 2xl:text-8xl"
			>
				Let's Discuss Your Ideas
			</h1>
		</div>

		<h2 class="text-3xl text-primary">
			<span class="text-4xl">&</span> Turn them to reality
		</h2>

		<p class="max-w-lg text-lg leading-7 text-accent">
			Contact me For questions, technical assistance, or collaboration
			opportunities via the contact information provided.
		</p>

		<ul class="flex flex-col gap-4 mt-4">
			{@render ContactInfo('+213 669859298', PhoneIcon)}
			{@render ContactInfo('hello@mohamedbedr.com', EnvelopeIcon)}
			{@render ContactInfo('02 15, City 400 logts, Damous, DZ 42014', MapPin)}
		</ul>
	</div>

	<div class="p-8 form-wrapper xl:max-w-lg sm:p-12">
		<form
			bind:this={form}
			method="POST"
			use:enhance={() => {
				loading = true;
				return async ({ update, result }) => {
					await update();
					loading = false;
					if (result.status === 300) {
						form?.reset();
					}
				};
			}}
		>
			<div class="flex flex-col gap-2">
				<label for="name">Name</label>
				<input id="name" type="text" name="name" value={data.name} required />
			</div>
			<div class="flex flex-col gap-2">
				<label for="email">Email</label>
				<input
					id="email"
					type="email"
					name="email"
					value={data.email}
					required
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label for="message">Message</label>
				<textarea
					id="message"
					name="message"
					rows="8"
					value={data.message}
					required
				></textarea>
			</div>

			<Button
				type="submit"
				class="mt-4 sm:mt-8 w-fit"
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

	.form-wrapper {
		width: 100%;
		height: 100%;
		border-radius: 0.75rem;
		background-color: hsl(var(--card-light-color));
		border: 1px solid hsl(var(--border-color));
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
		height: 100%;
	}

	textarea {
		resize: none;
	}
</style>
