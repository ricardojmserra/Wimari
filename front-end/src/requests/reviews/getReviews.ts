import http from '../http';

export default function getReviews(fetchOptions?: object) {
	try {
		return http.get(`/marisco-ms/reviews`, {
			...fetchOptions,
			next: { revalidate: 60 * 60 * 24 * 7 },
		});
	} catch (error: any) {
		throw new Error(error.message);
	}
}
