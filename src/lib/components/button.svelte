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
		leftIcon?: Component<SVGAttributes<EventTarget>>;
		rightIcon?: Component<SVGAttributes<EventTarget>>;
		as?: 'a' | 'button';
	}

	const {
		children,
		as = 'button',
		variant = 'primary',
		class: className,
		leftIcon,
		rightIcon,
		...rest
	}: Props = $props();

	const hasLeftIcon = $derived(Boolean(leftIcon));
	const hasRightIcon = $derived(Boolean(rightIcon));

	const s = cn({ button: true });
</script>

<svelte:element
	this={as}
	type="button"
	class={cn(
		'btn p-3 flex items-center gap-6 justify-between',
		className,
		variant,
		{
			'pr-6': hasLeftIcon && !hasRightIcon,
			'pl-6': hasRightIcon && !hasLeftIcon,
			'py-3 px-8 xl:py-3.5 xl:px-12': !hasLeftIcon && !hasRightIcon
		}
	)}
	{...rest}
>
	<div class="flex items-center gap-6">
		{#if hasLeftIcon}
			<span class="left-icon icon">
				<svelte:component this={leftIcon}></svelte:component>
			</span>
		{/if}

		{#if children}
			{@render children()}
		{/if}
	</div>

	{#if hasRightIcon}
		<span class="right-icon icon">
			<svelte:component this={rightIcon}></svelte:component>
		</span>
	{/if}
</svelte:element>

<style lang="scss">
	:global(html .btn) {
		&.primary {
			--btn-forground: 0 0% 100%;
			--btn-background: 0 0% 0%;
			--icon-forground: 0 0% 0%;
			--icon-background: 0 0% 100%;

			&:hover {
				--icon-forground: var(--primary-color);
			}
		}

		&.secondary {
			--btn-forground: var(--primary-color);
			--btn-background: var(--primary-color) / 0.075;
			--icon-forground: var(--primary-color);
			--icon-background: var(--primary-color) / 0.05;

			&:hover {
				--btn-forground: 0 0% 100%;
				--icon-background: 0 0% 100%;
			}
		}
	}

	:global(.dark .btn) {
		&.primary {
			--btn-forground: 0 80% 61%;
			--btn-background: 0 0% 100%;
			--icon-forground: 0 0% 100%;
			--icon-background: 0 80% 61%;

			&:hover {
				--btn-forground: 0 0% 100%;
				--icon-forground: 0 80% 61%;
				--icon-background: 0 0% 100%;
			}
		}

		&.secondary {
			--btn-forground: var(--primary-color);
			--btn-background: var(--primary-color) / 0.175;
			--icon-forground: var(--primary-color);
			--icon-background: var(--primary-color) 0.05;

			&:hover {
				--btn-forground: 0 0% 100%;
				--icon-background: 0 0% 100%;
			}
		}
	}

	.btn {
		flex: 0 0 1;
		position: relative;
		border: none;
		outline: none;
		min-width: fit-content;
		font-weight: 500;
		z-index: 1;
		overflow: hidden;
		border-radius: 12px;
		transition: color 0.3s ease-in-out;
		color: hsl(var(--btn-forground));
		background-color: hsl(var(--btn-background));

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			z-index: -1;
			transition: transform 0.3s ease-in-out;
			transform: scaleX(0);
			transform-origin: left;
			background-color: hsl(var(--primary-color));
		}

		& .icon {
			padding: 6px;
			border-radius: 12px;
			background-color: hsl(var(--icon-background));
			color: hsl(var(--icon-forground));
			transition:
				color 0.15s ease-in,
				background-color 0.2s ease-in;
		}

		&:hover {
			&::before {
				transform: scaleX(1);
			}
		}
	}
</style>
