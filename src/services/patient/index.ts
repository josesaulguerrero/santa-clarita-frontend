import { Observable } from 'rxjs';

import { httpClientInstance } from './../../config/index';
import {
	IPartialPatientDTO,
	IDetailedPatientDTO,
	ICreatePatientDTO,
} from './../../types/schema/PatientDTO';
import { IHttpClient } from '../../types/common/Http';

export class PatientService {
	private static instance: PatientService;
	private httpClient: IHttpClient;
	private baseEndpoint: string;

	private constructor() {
		this.httpClient = httpClientInstance;
		this.baseEndpoint = 'patients';
	}

	public getAll = (): Observable<IPartialPatientDTO[]> =>
		this.httpClient.get<IPartialPatientDTO[]>(this.baseEndpoint);

	public getOneById = (id: number): Observable<IDetailedPatientDTO> =>
		this.httpClient.get<IDetailedPatientDTO>(`${this.baseEndpoint}/${id}`);

	public post = (dto: ICreatePatientDTO): Observable<IDetailedPatientDTO> =>
		this.httpClient.post<IDetailedPatientDTO>(this.baseEndpoint, dto);

	public static getInstance = (): PatientService => {
		if (!PatientService.instance) {
			PatientService.instance = new PatientService();
		}
		return PatientService.instance;
	};
}
