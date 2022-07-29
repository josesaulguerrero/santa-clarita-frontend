export interface PartialSpecialistDTO {
	readonly id: number;
	readonly dni: string;
	readonly fullName: string;
	readonly age: string;
}

export interface DetailedPatientDTO extends PartialSpecialistDTO {
	readonly isAvailable: boolean;
	readonly specialtyId: number;
}

export interface CreatePatientDTO {
	readonly dni: string;
	readonly fullName: string;
	readonly age: string;
}
