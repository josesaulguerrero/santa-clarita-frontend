export interface IPartialSpecialistDTO {
	readonly id: number;
	readonly dni: string;
	readonly fullName: string;
	readonly age: string;
}

export interface IDetailedSpecialistDTO extends IPartialSpecialistDTO {
	readonly isAvailable: boolean;
	readonly specialtyId: number;
}

export interface ICreateSpecialistDTO {
	readonly dni: string;
	readonly fullName: string;
	readonly age: string;
}
