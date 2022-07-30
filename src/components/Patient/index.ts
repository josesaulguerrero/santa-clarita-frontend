import { Component } from '../../types/common/Component';
import { IPartialPatientDTO } from '../../types/schema/PatientDTO';
import './index.css';

export const Patient: Component<IPartialPatientDTO> = ({
	fullName,
	id,
	age,
}) => {
	const $patient = document.createElement('li');
	$patient.classList.add('patient');
	$patient.innerHTML = `
      <h3 class="patient-name" >${fullName}</h3>
      <span class="patient-age" >${age}</span>
      <span class="patient-id" >${id}</span>
	`;
	return $patient;
};
