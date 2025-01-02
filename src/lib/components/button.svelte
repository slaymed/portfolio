<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Component } from 'svelte';
	import type {
		HTMLAnchorAttributes,
		HTMLButtonAttributes,
		SVGAttributes
	} from 'svelte/elements';

	interface AnchorAttributes {
		href: HTMLAnchorAttributes['href'];
		target: HTMLAnchorAttributes['target'];
	}

	interface Props extends HTMLButtonAttributes, Partial<AnchorAttributes> {
		variant?: 'primary' | 'secondary';
		LeftIcon?: Component<SVGAttributes<EventTarget>>;
		RightIcon?: Component<SVGAttributes<EventTarget>>;
		as?: 'a' | 'button';
		fullRadius?: boolean;
	}

	const {
		children,
		as = 'button',
		variant = 'primary',
		fullRadius = false,
		class: className,
		LeftIcon,
		RightIcon,
		...rest
	}: Props = $props();
</script>

<svelte:element
	this={as}
	type="button"
	class={cn(
		'btn flex items-center justify-center gap-4 rounded-xl px-6 py-4',
		className,
		variant,
		{ 'rounded-full': fullRadius }
	)}
	{...rest}
>
	{#if Boolean(LeftIcon)}
		<LeftIcon />
	{/if}

	{#if children}
		{@render children()}
	{/if}

	{#if Boolean(RightIcon)}
		<RightIcon />
	{/if}
</svelte:element>

<style lang="scss">
	:global(.btn) {
		&.primary {
			--btn-background: 0 0% 0%;
			--btn-forground: 0 0% 100%;

			&:hover {
				--btn-background: var(--primary-color);
			}
		}

		&.secondary {
			--btn-background: var(--primary-color) / 0.075;
			--btn-forground: var(--primary-color);

			&:hover {
				--btn-background: var(--primary-color);
				--btn-forground: 0 0% 100%;
			}
		}
	}

	:global(.dark .btn) {
		&.primary {
			--btn-background: 217 27% 17%;
			--btn-forground: 0 0% 100%;
			--btn-border-color: 217 27% 17%;

			&:hover {
				--btn-background: var(--primary-color);
				--btn-forground: 0 0% 0%;
				--btn-border-color: var(--primary-color);
			}
		}

		&.secondary {
			--btn-background: var(--primary-color) / 0;
			--btn-forground: var(--forground-color);
			--btn-border-color: var(--primary-color);

			&:hover {
				--btn-background: 217 27% 17%;
				--btn-forground: 0 0% 100%;
				--btn-border-color: 217 27% 17%;
			}
		}
	}

	.btn {
		flex: 0 0 1;
		position: relative;
		outline: none;
		min-width: fit-content;
		font-weight: 500;
		z-index: 1;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
		color: hsl(var(--btn-forground));
		background-color: hsl(var(--btn-background));
		border: 2px solid hsl(var(--btn-border-color));
	}
</style>
