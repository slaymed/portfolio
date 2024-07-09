import { redirect, type ServerLoadEvent } from '@sveltejs/kit';

export const prerender = false;

const DATA_KEY = 'contact-form-data';

export function load({ cookies }: ServerLoadEvent) {
	const data = JSON.parse(cookies.get(DATA_KEY) ?? '{}');
	return {
		name: data.name ?? '',
		email: data.email ?? '',
		message: data.message ?? ''
	};
}

export const actions = {
	async default({ request, cookies, fetch }) {
		const formData = await request.formData();

		const payload = {
			name: formData.get('name'),
			email: formData.get('email'),
			message: formData.get('message')
		};

		const res = await fetch('http://localhost:3000/api/contact', {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.ok) {
			cookies.delete(DATA_KEY, { path: '/contact' });
			throw redirect(303, '/contact?status=success');
		}

		cookies.set(DATA_KEY, JSON.stringify(payload), {
			path: '/contact'
		});
		throw redirect(303, '/contact?status=failed');
	}
};
