import { CustomHttpClient } from '../services/common/httpClient';

export const httpClientInstance = new CustomHttpClient(
	import.meta.env.VITE_API_BASE_URL
);
