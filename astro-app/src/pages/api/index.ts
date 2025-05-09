import type {APIRoute} from 'astro';

export const GET: APIRoute = async ({locals}) => {
	//@ts-ignore
	const data = locals.runtime.env.MY_SERVICE.sendMessage('Hello from Astro');
	return new Response(JSON.stringify(data), {status: 200});
};
0;
