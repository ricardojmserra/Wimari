import http from '../http';

export default function getPersonsBoundaries(ctx?: any, fetchOptions?: object) {
	try {
		return http.get(`/marisco-ms/management/persons`, {
			...fetchOptions,
			ctx,
			next: { revalidate: 60 * 60 },
		});
	} catch (error: any) {
		throw new Error(error.message);
	}
}
