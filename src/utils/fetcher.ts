const BASE_URL = 'https://api.nasa.gov/planetary/apod?';
const API_KEY = 'FcjNc12fzngeoMZ4LlIm26N8CmdIFihxwxCbpNSl';

export const fetcher = async (queryParams?: string) => {
	try {
		const url = await fetch(
			`${BASE_URL}api_key=${API_KEY}${queryParams?.length ? queryParams : ''}`
		);
		const data = await url.json();
		return Promise.resolve(data);
	} catch (error) {
		return Promise.reject(error);
	}
};
