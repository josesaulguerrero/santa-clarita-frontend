import { Observable } from 'rxjs';

import { httpClientInstance } from './../../config/index';
import {
	IPartialAppointmentDTO,
	IDetailedAppointmentDTO,
	ICreateAppointmentDTO,
} from './../../types/schema/AppointmentDTO';
import { IHttpClient } from '../../types/common/Http';

export class AppointmentService {
	private static instance: AppointmentService;
	private httpClient: IHttpClient;
	private baseEndpoint: string;

	private constructor() {
		this.httpClient = httpClientInstance;
		this.baseEndpoint = 'appointments';
	}

	public getAll = (): Observable<IPartialAppointmentDTO[]> =>
		this.httpClient.get<IPartialAppointmentDTO[]>(this.baseEndpoint);

	public getAllByPatientId = (
		patientId: number
	): Observable<IPartialAppointmentDTO[]> =>
		this.httpClient.get<IPartialAppointmentDTO[]>(
			`${this.baseEndpoint}/patient/${patientId}`
		);

	public getAllBySpecialtyId = (
		specialtyId: number
	): Observable<IPartialAppointmentDTO[]> =>
		this.httpClient.get<IPartialAppointmentDTO[]>(
			`${this.baseEndpoint}/specialty/${specialtyId}`
		);

	public getOneById = (id: number): Observable<IDetailedAppointmentDTO> =>
		this.httpClient.get<IDetailedAppointmentDTO>(`${this.baseEndpoint}/${id}`);

	public post = (
		dto: ICreateAppointmentDTO
	): Observable<IDetailedAppointmentDTO> =>
		this.httpClient.post<IDetailedAppointmentDTO>(this.baseEndpoint, dto);

	public delete = (id: number): Observable<IDetailedAppointmentDTO> =>
		this.httpClient.delete<IDetailedAppointmentDTO>(
			`${this.baseEndpoint}/${id}`
		);

	public static getInstance = (): AppointmentService => {
		if (!AppointmentService.instance) {
			AppointmentService.instance = new AppointmentService();
		}
		return AppointmentService.instance;
	};
}
