import { httpClientInstance } from './../../config/index';
import { Observable } from 'rxjs';

import { IPartialAppointmentDTO } from './../../types/schema/AppointmentDTO';
import { HttpMethod, IHttpClient } from '../../types/common/HttpClient';

export class AppointmentService {
	private static instance: AppointmentService;
	private httpClient: IHttpClient;

	private constructor() {
		this.httpClient = httpClientInstance;
	}

	public getAll = (): Observable<IPartialAppointmentDTO[]> => {
		return this.httpClient.get<IPartialAppointmentDTO[]>(
			'appointments',
			HttpMethod.GET
		);
	};

	public static getInstance = (): AppointmentService => {
		if (!AppointmentService.instance) {
			AppointmentService.instance = new AppointmentService();
		}
		return AppointmentService.instance;
	};
}
