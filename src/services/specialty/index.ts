import { Observable } from 'rxjs';

import { httpClientInstance } from './../../config/index';
import {
	IPartialSpecialtyDTO,
	IDetailedSpecialtyDTO,
	ICreateSpecialtyDTO,
	IUpdateSpecialtyDTO,
} from './../../types/schema/SpecialtyDTO';
import { IHttpClient } from '../../types/common/Http';

export class SpecialtyService {
	private static instance: SpecialtyService;
	private httpClient: IHttpClient;
	private baseEndpoint: string;

	private constructor() {
		this.httpClient = httpClientInstance;
		this.baseEndpoint = 'specialties';
	}

	public getAll = (): Observable<IPartialSpecialtyDTO[]> =>
		this.httpClient.get<IPartialSpecialtyDTO[]>(this.baseEndpoint);

	public getOneById = (id: number): Observable<IDetailedSpecialtyDTO> =>
		this.httpClient.get<IDetailedSpecialtyDTO>(`${this.baseEndpoint}/${id}`);

	public post = (dto: ICreateSpecialtyDTO): Observable<IDetailedSpecialtyDTO> =>
		this.httpClient.post<IDetailedSpecialtyDTO>(this.baseEndpoint, dto);

	public update = (
		dto: IUpdateSpecialtyDTO
	): Observable<IDetailedSpecialtyDTO> =>
		this.httpClient.put(`${this.baseEndpoint}`, dto);

	public assignNewSpecialist = (
		dto: IUpdateSpecialtyDTO
	): Observable<IDetailedSpecialtyDTO> =>
		this.httpClient.put(`${this.baseEndpoint}/specialist`, dto);

	public delete = (id: number): Observable<IDetailedSpecialtyDTO> =>
		this.httpClient.get<IDetailedSpecialtyDTO>(`${this.baseEndpoint}/${id}`);

	public static getInstance = (): SpecialtyService => {
		if (!SpecialtyService.instance) {
			SpecialtyService.instance = new SpecialtyService();
		}
		return SpecialtyService.instance;
	};
}
