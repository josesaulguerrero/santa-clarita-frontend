import { IPartialPatientDTO } from './types/schema/PatientDTO';
import { httpClient, HttpMethod } from './services/common/httpClient';
httpClient<IPartialPatientDTO[]>('patients', HttpMethod.GET).subscribe(
	console.log
);
