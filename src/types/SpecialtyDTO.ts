import { PartialSpecialistDTO } from './SpecialistDTO';

export interface PartialSpecialtyDTO {
	readonly id: number;
	readonly name: string;
}

export interface DetailedSpecialtyDTO extends PartialSpecialtyDTO {
	readonly specialistInCharge: PartialSpecialistDTO;
}

export interface CreateSpecialtyDTO {
	readonly name: string;
	readonly specialistId: number;
}

export interface UpdateSpecialtyDTO extends CreateSpecialtyDTO {
	readonly id: number;
}
