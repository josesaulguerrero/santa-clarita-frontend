import { HttpClient } from './../../types/common/HttpClient';
import { httpClient as client } from './../common/httpClient';

export class AppointmentService {
	private httpClient: HttpClient;

	constructor() {
		this.httpClient = client;
	}
}
