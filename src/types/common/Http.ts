import { Observable } from 'rxjs';

export enum HttpMethod {
	'GET',
	'POST',
	'PUT',
	'PATCH',
	'DELETE',
}

export interface IHttpClient {
	get<ResponseType>(endpoint: string, body?: any): Observable<ResponseType>;
	post<ResponseType>(endpoint: string, body?: any): Observable<ResponseType>;
	put<ResponseType>(endpoint: string, body?: any): Observable<ResponseType>;
	patch<ResponseType>(endpoint: string, body?: any): Observable<ResponseType>;
	delete<ResponseType>(endpoint: string, body?: any): Observable<ResponseType>;
}
