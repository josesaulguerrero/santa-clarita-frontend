import { IPartialSpecialistDTO } from './SpecialistDTO';

export interface IPartialSpecialtyDTO {
	readonly id: number;
	readonly name: string;
}

export interface IDetailedSpecialtyDTO extends IPartialSpecialtyDTO {
	readonly specialistInCharge: IPartialSpecialistDTO;
}

export interface ICreateSpecialtyDTO {
	readonly name: string;
	readonly specialistId: number;
}

export interface IUpdateSpecialtyDTO extends ICreateSpecialtyDTO {
	readonly id: number;
}
