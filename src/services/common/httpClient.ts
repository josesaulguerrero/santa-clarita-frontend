import { IHttpClient, HttpMethod } from '../../types/common/Http';
import { from, Observable } from 'rxjs';

export class CustomHttpClient implements IHttpClient {
	private baseURL: string;

	constructor(baseURL?: string) {
		this.baseURL = !baseURL ? '' : baseURL;
		if (this.baseURL === '') {
			console.warn("You aren't setting a base url for the http client.");
		}
	}

	private execute<ResponseType>(
		endpoint: string,
		method: HttpMethod,
		body?: any
	): Observable<ResponseType> {
		const url = `${this.baseURL}/${endpoint}`;
		const requestConfig: Request = new Request(url, {
			method: HttpMethod[method],
			body: body,
		});
		const response = fetch(requestConfig).then((r) => r.json());
		return from(response);
	}

	get<ResponseType>(endpoint: string, body?: any): Observable<ResponseType> {
		return this.execute<ResponseType>(endpoint, HttpMethod.GET, body);
	}

	post = <ResponseType>(
		endpoint: string,
		body?: any
	): Observable<ResponseType> =>
		this.execute<ResponseType>(endpoint, HttpMethod.GET, body);

	put = <ResponseType>(
		endpoint: string,
		body?: any
	): Observable<ResponseType> =>
		this.execute<ResponseType>(endpoint, HttpMethod.GET, body);

	patch = <ResponseType>(
		endpoint: string,
		body?: any
	): Observable<ResponseType> =>
		this.execute<ResponseType>(endpoint, HttpMethod.GET, body);

	delete = <ResponseType>(
		endpoint: string,
		body?: any
	): Observable<ResponseType> =>
		this.execute<ResponseType>(endpoint, HttpMethod.GET, body);
}
