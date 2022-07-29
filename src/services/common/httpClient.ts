import { from, Observable } from 'rxjs';

const baseURL = import.meta.env.VITE_API_BASE_URL;
export enum HttpMethod {
	'GET',
	'POST',
	'PUT',
	'PATCH',
	'DELETE',
}

export const httpClient = <T>(
	endpoint: string,
	method: HttpMethod,
	body?: any
): Observable<T> => {
	const url: string = `${baseURL}/${endpoint}`;
	const requestConfig: Request = new Request(url, {
		method: HttpMethod[method],
		body: body,
	});
	const response = fetch(requestConfig).then((r) => r.json());
	return from(response);
};
