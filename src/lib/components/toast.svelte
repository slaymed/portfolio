<script lang="ts">
	import CheckCircleIcon from '$lib/icons/check-circle-icon.svelte';
	import XCircleIcon from '$lib/icons/x-circle-icon.svelte';
	import XMarkIcon from '$lib/icons/x-mark-icon.svelte';

	type Variant = 'success' | 'error';

	interface Props {
		variant?: Variant;
		message: string;
		onclose?: () => void;
		href?: string;
	}

	const { variant = 'success', href, message, onclose }: Props = $props();

	const data = {
		success: {
			title: 'Success',
			Icon: CheckCircleIcon
		},
		error: {
			title: 'Failed',
			Icon: XCircleIcon
		}
	};

	const { title, Icon } = $derived(data[variant]);
</script>

<div
	class="flex flex-col gap-2.5 rounded-xl border border-forground/5 bg-card-light p-5"
>
	<div class="flex items-center justify-between gap-4">
		<div class="flex items-center gap-3 {variant}">
			<Icon />
			<span>{title}</span>
		</div>
		{#if href || typeof onclose === 'function'}
			<a {href} onclick={onclose}>
				<XMarkIcon class="text-forground-light" />
			</a>
		{/if}
	</div>
	<p class="px-9 text-forground-light">
		{message}
	</p>
</div>

<style>
	.success {
		color: rgb(34 197 94);
	}

	.error {
		color: rgb(239 68 68);
	}
</style>
