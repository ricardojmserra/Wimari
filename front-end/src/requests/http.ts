import { DELETE, GET, POST, PUT } from '@/types/requestMethod';
import { request } from './request';

const http = {
	get: (fetchUrl: string, fetchOptions?: any, refreshSession?: boolean) => {
		return request(fetchUrl, GET, undefined, fetchOptions, refreshSession);
	},

	post: (fetchUrl: string, body: any, fetchOptions?: any, refreshSession?: boolean) => {
		return request(fetchUrl, POST, body, fetchOptions, refreshSession);
	},

	put: (fetchUrl: string, body: any, fetchOptions?: any, refreshSession?: boolean) => {
		return request(fetchUrl, PUT, body, fetchOptions, refreshSession);
	},

	delete: (fetchUrl: string, body: any, fetchOptions?: any, refreshSession?: boolean) => {
		return request(fetchUrl, DELETE, body, fetchOptions, refreshSession);
	},
};

export default http;
