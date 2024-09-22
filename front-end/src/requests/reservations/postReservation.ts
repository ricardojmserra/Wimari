import { Reservation } from '@/types/reservation';
import http from '../http';

export default function postReservation(data: Reservation, fetchOptions?: object) {
	try {
		return http.post(`/marisco-ms/reservations/`, data, {
			...fetchOptions,
			cache: 'no-store',
		});
	} catch (error: any) {
		throw new Error(error.message);
	}
}
