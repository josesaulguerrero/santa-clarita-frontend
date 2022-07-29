import { Observable } from 'rxjs';

export enum HttpMethod {
	'GET',
	'POST',
	'PUT',
	'PATCH',
	'DELETE',
}

export interface HttpClient {
	get(endpoint: string, body?: any): Observable<any>;
	post(endpoint: string, body?: any): Observable<any>;
	put(endpoint: string, body?: any): Observable<any>;
	patch(endpoint: string, body?: any): Observable<any>;
	delete(endpoint: string, body?: any): Observable<any>;
}
