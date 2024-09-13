import http from '../http';

export default function getHolidaysDate(month: number, ctx?: any, fetchOptions?: object) {
	try {
		return http.get(`/marisco-ms/management/holidays/${month}`, {
			...fetchOptions,
			ctx,
			next: { revalidate: 60 * 15 },
		});
	} catch (error: any) {
		throw new Error(error.message);
	}
}
