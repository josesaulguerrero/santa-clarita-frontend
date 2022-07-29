import { IHttpClient, HttpMethod } from './../../types/common/HttpClient';
import { from, Observable } from 'rxjs';

export class CustomHttpClient<T> implements IHttpClient {
	private baseURL: string;

	constructor(baseURL?: string) {
		this.baseURL = !baseURL ? '' : baseURL;
		if (this.baseURL === '') {
			console.warn("You aren't setting a base url for the http client.");
		}
	}

	private execute(
		endpoint: string,
		method: HttpMethod,
		body?: any
	): Observable<T> {
		const requestConfig: Request = new Request(endpoint, {
			method: HttpMethod[method],
			body: body,
		});
		const response = fetch(requestConfig).then((r) => r.json());
		return from(response);
	}

	get = (endpoint: string, body?: any): Observable<T> =>
		this.execute(endpoint, HttpMethod.GET, body);

	post = (endpoint: string, body?: any): Observable<T> =>
		this.execute(endpoint, HttpMethod.POST, body);

	put = (endpoint: string, body?: any): Observable<T> =>
		this.execute(endpoint, HttpMethod.PUT, body);

	patch = (endpoint: string, body?: any): Observable<T> =>
		this.execute(endpoint, HttpMethod.PATCH, body);

	delete = (endpoint: string, body?: any): Observable<T> =>
		this.execute(endpoint, HttpMethod.DELETE, body);
}
