import { IPartialSpecialtyDTO } from './SpecialtyDTO';

export interface IPartialAppointmentDTO {
	readonly id: number;
	readonly date: string;
}

export interface IDetailedAppointmentDTO extends IPartialAppointmentDTO {
	readonly specialty: IPartialSpecialtyDTO;
}

export interface ICreateAppointmentDTO {
	readonly patientId: number;
	readonly specialtyId: number;
}
