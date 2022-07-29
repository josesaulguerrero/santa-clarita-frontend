import { PartialSpecialtyDTO } from './SpecialtyDTO';

export interface PartialAppointmentDTO {
	readonly id: number;
	readonly date: string;
}

export interface DetailedAppointmentDTO extends PartialAppointmentDTO {
	readonly specialty: PartialSpecialtyDTO;
}

export interface CreateAppointmentDTO {
	readonly patientId: number;
	readonly specialtyId: number;
}
