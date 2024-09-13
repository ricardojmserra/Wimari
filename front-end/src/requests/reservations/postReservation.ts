import http from '../http';

export default function postReservation(data: object, ctx?: any, fetchOptions?: object) {
	try {
		return http.post(`/marisco-ms/reservations/`, data, {
			...fetchOptions,
			ctx,
			cache: 'no-store',
		});
	} catch (error: any) {
		throw new Error(error.message);
	}
}
