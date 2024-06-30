/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: {
				nav: 'var(--nav-height)'
			},
			minHeight: {
				'screen-nav-less': 'calc(100vh - var(--nav-height))'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			colors: {
				primary: 'hsl(var(--primary-color))',
				secondary: 'hsl(var(--secondary-color))',
				background: 'hsl(var(--background-color))',
				forground: {
					DEFAULT: 'hsl(var(--forground-color))',
					light: 'hsl(var(--forground-light-color))'
				},
				card: {
					DEFAULT: 'hsl(var(--card-color))',
					light: 'hsl(var(--card-light-color))'
				}
			},
			spacing: {
				nav: 'var(--nav-height)'
			},
			textIndent: {
				full: '100%'
			},
			container: {
				padding: {
					DEFAULT: '2.5rem',
					sm: '4rem',
					xl: '5rem',
					'2xl': '6rem'
				}
			}
		}
	}
};
