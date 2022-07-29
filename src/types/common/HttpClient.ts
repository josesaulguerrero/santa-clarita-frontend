export enum HttpMethod {
	'GET',
	'POST',
	'PUT',
	'PATCH',
	'DELETE',
}

export type HttpClient = (
	endpoint: string,
	method: HttpMethod,
	body?: any
) => {};
