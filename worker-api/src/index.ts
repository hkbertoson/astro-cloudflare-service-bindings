import { WorkerEntrypoint } from 'cloudflare:workers';

export default class extends WorkerEntrypoint {
	async fetch() {
		return new Response(null, { status: 404 });
	}

	async sendMessage(message: string) {
		return `This is a message from the worker: ${message}`;
	}
}
