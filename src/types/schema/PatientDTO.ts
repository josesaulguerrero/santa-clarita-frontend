import { IPartialAppointmentDTO } from './AppointmentDTO';

export interface IPartialPatientDTO {
	readonly id: number;
	readonly dni: string;
	readonly fullName: string;
	readonly age: string;
}

export interface IDetailedPatientDTO extends IPartialPatientDTO {
	readonly takenAppointments: IPartialAppointmentDTO[];
}

export interface ICreatePatientDTO {
	readonly dni: string;
	readonly fullName: string;
	readonly age: string;
}
