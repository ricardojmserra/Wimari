import http from '../http';

export default function getUnavailableDates(month: number, fetchOptions?: object) {
	try {
		return http.get(`/marisco-ms/reservations/unavailable/dates/${month}`, {
			...fetchOptions,
			next: { revalidate: 30 },
		});
	} catch (error: any) {
		throw new Error(error.message);
	}
}
