export const getDefaultRequestHeaders = (fetchOptions: any, accessToken: string) => ({
	'Content-Type':
		fetchOptions && fetchOptions['Content-Type']
			? fetchOptions['Content-Type']
			: 'application/json',
	Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
	...fetchOptions?.headers,
});
