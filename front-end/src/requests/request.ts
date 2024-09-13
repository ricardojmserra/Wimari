import RequestResponse from '@/types/requestResponse';
import updateRefreshToken from './refreshToken';
import { getDefaultRequestHeaders } from './defaultHeaders';
import { GET, RequestMethod } from '@/types/requestMethod';

const TRY_DELAY = 10000;

const BASE_URL = process.env.BACKEND_URL;
const NEXT_AUTH_SECRET = process.env.NEXTAUTH_SECRET;
export const SESSION_TOKEN_NAME = 'next-auth.session-token';

// async function retrieveSession(fetchOptions: any) {
// 	if (typeof window == 'undefined') {
// 		let sessionToken = fetchOptions?.sessionToken;
// 		const ctx = fetchOptions?.ctx;
// 		if (!sessionToken && ctx) {
// 			sessionToken = ctx?.req?.cookies[SESSION_TOKEN_NAME];

// 			if (!sessionToken && typeof ctx?.req?.cookies === 'object') {
// 				sessionToken = ctx?.req?.cookies?.get(SESSION_TOKEN_NAME)?.value;
// 			}
// 		}

// 		if (sessionToken && sessionToken !== null) {
// 			const decodedSession = await decode({
// 				token: sessionToken,
// 				secret: NEXT_AUTH_SECRET,
// 			});

// 			return decodedSession;
// 		}
// 	} else {
// 		const session = await getSession();
// 		return session;
// 	}
// }

async function retryRequest(
	fetchUrl: string,
	method: RequestMethod,
	body: any,
	fetchOptions: any,
	refresh: boolean
) {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			request(
				fetchUrl,
				method,
				body,
				{
					...fetchOptions,
					retry: 0,
				},
				refresh
			)
				.then((response) => {
					resolve(response);
				})
				.catch((ex) => {
					resolve(ex);
				});
		}, TRY_DELAY);
	});
}

async function getBody(response: Response) {
	switch (response.status) {
		case 204:
			return {};
		case 201:
			return {};
		case 404:
			return {};
		default:
			return await response.json();
	}
}

export async function request(
	fetchUrl: string,
	method: RequestMethod,
	body: any,
	fetchOptions: any,
	refresh: boolean = true,
	tryNumber: number = 0
) {
	const ctx = fetchOptions?.ctx;
	// const session = await retrieveSession(fetchOptions);
	// const accessToken = session?.accessToken;

	let options = {
		...fetchOptions,
		method: method,
		// headers: getDefaultRequestHeaders(fetchOptions, accessToken),
		credentials: 'include',
		body: method === GET && body ? JSON.stringify(body) : null,
	};

	const url = (fetchOptions?.externalRequest ? '' : BASE_URL) + fetchUrl;

	return fetch(url, options)
		.then(async (response: Response) => {
			// set request format
			return {
				ok: response.ok,
				status: response.status,
				statusText: response.statusText,
				data: await getBody(response),
			};
		})
		.then(async (response: RequestResponse) => {
			// if request is forbidden or unauthorized try to refresh token
			if (!response) return Promise.reject(response);
			if ((response.status !== 401 && response.status !== 403) || !refresh)
				return response;

			const isServer = Boolean(ctx);
			const refreshToken = false;
			// const refreshToken = session?.refreshToken;
			if (refreshToken) {
				try {
					return await updateRefreshToken(
						isServer,
						refreshToken,
						request,
						options,
						fetchUrl
					);
				} catch (err) {}
			}

			return response;
		})
		.then(async (response) => {
			// if retry is used, we'll retry the request n times
			while (
				!response.ok &&
				(response?.status === 404 || response?.path) &&
				tryNumber < fetchOptions?.retry
			) {
				response = await retryRequest(fetchUrl, method, body, options, refresh);
			}

			return response;
		})
		.then((response) => {
			// if it keeps not working, return an error
			if (!response.ok)
				return Promise.reject({
					...response,
					url: url,
				});

			return response;
		})
		.catch((error) => {
			return Promise.reject(error);
		});
}
