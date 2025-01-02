<script lang="ts">
	import EnvelopeIcon from '$lib/icons/envelope-icon.svelte';
	import MapPin from '$lib/icons/map-pin.svelte';
	import PaperAirplain from '$lib/icons/paper-airplain.svelte';
	import PhoneIcon from '$lib/icons/phone-icon.svelte';
	import XMarkIcon from '$lib/icons/x-mark-icon.svelte';
	import CurvedCross from '$lib/shapes/curved-cross.svelte';
	import Button from './button.svelte';
</script>

{#snippet ContactInfo(info: any, Icon: any)}
	<li class="flex items-center gap-3">
		<span class="block w-fit rounded-full bg-primary p-2.5 text-white">
			<Icon />
		</span>
		<span class="text-[17px]">
			{info}
		</span>
	</li>
{/snippet}

<div class="relative flex max-w-5xl border border-forground/10 bg-card">
	<a href="#main" class="absolute right-4 top-4">
		<XMarkIcon />
	</a>

	<div class="h-full w-1/2 bg-card-light p-12">
		<form method="post" action="?/sendMail">
			<div class="flex flex-col gap-2">
				<label for="name">Name</label>
				<input id="name" type="text" name="name" />
			</div>
			<div class="flex flex-col gap-2">
				<label for="email">Email</label>
				<input id="email" type="email" name="email" />
			</div>
			<div class="flex flex-col gap-2">
				<label for="message">Message</label>
				<textarea id="message" name="message" rows="8"></textarea>
			</div>

			<Button type="submit" class="mt-8 w-fit" RightIcon={PaperAirplain}>
				Submit
			</Button>
		</form>
	</div>
	<div class="flex w-1/2 flex-col gap-8 p-12">
		<div class="relative w-fit">
			<h2 class="mt-6 text-5xl font-semibold">
				Contact <span class="text-primary">Me</span>
			</h2>
			<CurvedCross class="absolute -top-4 left-full ml-4 size-10" />
			<CurvedCross
				class="absolute left-full top-3 ml-11 size-7 text-secondary"
			/>
		</div>
		<p class="text-[17px] text-lg leading-7">
			For questions, technical assistance, or collaboration opportunities via
			the contact information provided.
		</p>
		<ul class="mt-4 flex flex-col gap-4">
			{@render ContactInfo('+213 669859298', PhoneIcon)}
			{@render ContactInfo('hello@mohamedbedr.com', EnvelopeIcon)}
			{@render ContactInfo('02 15, City 400 logts, Damous, DZ 42014', MapPin)}
		</ul>
	</div>
</div>

<style>
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
