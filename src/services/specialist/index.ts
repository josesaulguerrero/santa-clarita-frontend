import { Observable } from 'rxjs';

import { httpClientInstance } from './../../config/index';
import {
	IPartialSpecialistDTO,
	IDetailedSpecialistDTO,
	ICreateSpecialistDTO,
} from './../../types/schema/SpecialistDTO';
import { IHttpClient } from '../../types/common/Http';

export class SpecialistService {
	private static instance: SpecialistService;
	private httpClient: IHttpClient;
	private baseEndpoint: string;

	private constructor() {
		this.httpClient = httpClientInstance;
		this.baseEndpoint = 'specialists';
	}

	public getAll = (): Observable<IPartialSpecialistDTO[]> =>
		this.httpClient.get<IPartialSpecialistDTO[]>(this.baseEndpoint);

	public getAllAvailable = (): Observable<IPartialSpecialistDTO[]> =>
		this.httpClient.get<IPartialSpecialistDTO[]>(
			`${this.baseEndpoint}/available`
		);

	public getOneById = (id: number): Observable<IDetailedSpecialistDTO> =>
		this.httpClient.get<IDetailedSpecialistDTO>(`${this.baseEndpoint}/${id}`);

	public post = (
		dto: ICreateSpecialistDTO
	): Observable<IDetailedSpecialistDTO> =>
		this.httpClient.post<IDetailedSpecialistDTO>(this.baseEndpoint, dto);

	public static getInstance = (): SpecialistService => {
		if (!SpecialistService.instance) {
			SpecialistService.instance = new SpecialistService();
		}
		return SpecialistService.instance;
	};
}
