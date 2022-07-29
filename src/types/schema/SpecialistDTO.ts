export interface IPartialSpecialistDTO {
	readonly id: number;
	readonly dni: string;
	readonly fullName: string;
	readonly age: string;
}

export interface IDetailedPatientDTO extends IPartialSpecialistDTO {
	readonly isAvailable: boolean;
	readonly specialtyId: number;
}

export interface ICreatePatientDTO {
	readonly dni: string;
	readonly fullName: string;
	readonly age: string;
}
