import { GET, PUT } from '@/types/requestMethod';

const REFRESH_URL = '/login-ms/refresh-token/';
// const NEXT_AUTH_SECRET = process.env.NEXTAUTH_SECRET;

const updateRefreshToken = async (
	isServer: boolean,
	refreshToken: string,
	request: any,
	options: any,
	fetchUrl: string
) => {
	const requestMethod = isServer ? PUT : GET;
	const requestBody = isServer ? { token: refreshToken } : undefined;

	const refreshResponse = await request(
		REFRESH_URL,
		requestMethod,
		requestBody,
		options,
		false
	);

	const newAccessToken = refreshResponse.data.token;

	// const sessionToken = await encode({
	// 	token: { ...session, accessToken: newAccessToken },
	// 	secret: NEXT_AUTH_SECRET,
	// });

	// nookies.set(ctx, SESSION_TOKEN_NAME, sessionToken, {
	// 	maxAge: 30 * 24 * 60 * 60,
	// 	path: '/',
	// });

	// [Tentar rodar o request anterior]
	const retryResponse = await request(
		fetchUrl,
		options.method,
		options.body,
		{
			...options,
			refresh: false,
			headers: {
				...options.headers,
				Authorization: `Bearer ${newAccessToken}`,
			},
		},
		false
	);

	return retryResponse;
};

export default updateRefreshToken;
