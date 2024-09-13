import http from '../http';

export default function getUnavailableTimes(date: Date, ctx?: any, fetchOptions?: object) {
	try {
		return http.get(`/marisco-ms/reservations/unavailable/times/${date}`, {
			...fetchOptions,
			ctx,
			next: { revalidate: 30 },
		});
	} catch (error: any) {
		throw new Error(error.message);
	}
}
