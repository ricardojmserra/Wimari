import http from '../http';

export default function getPersonsBoundaries(fetchOptions?: object) {
	try {
		return http.get(`/marisco-ms/management/persons`, {
			...fetchOptions,
			next: { revalidate: 60 * 60 },
		});
	} catch (error: any) {
		throw new Error(error.message);
	}
}
