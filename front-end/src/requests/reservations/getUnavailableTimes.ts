import http from '../http';

export default function getUnavailableTimes(date: Date, fetchOptions?: object) {
	try {
		return http.get(`/marisco-ms/reservations/unavailable/times/${date}`, {
			...fetchOptions,
			next: { revalidate: 30 },
		});
	} catch (error: any) {
		throw new Error(error.message);
	}
}
