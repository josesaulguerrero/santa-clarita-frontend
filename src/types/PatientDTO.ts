export interface PartialPatientDTO {
	readonly id: number;
	readonly dni: string;
	readonly fullName: string;
	readonly age: string;
}

export interface DetailedPatientDTO extends PartialPatientDTO {
	// readonly takenAppointments: PartialAppointmentDTO[]; // TODO create appointment dto
}

export interface CreatePatientDTO {
	readonly dni: string;
	readonly fullName: string;
	readonly age: string;
}
