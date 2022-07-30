import { Patient } from './../../components/Patient/index';
import { Navlink } from '../../components/Navlink';
import { PatientService } from '../../services/patient';
import { Component } from '../../types/common/Component';
import './index.css';

export const Patients: Component<void> = () => {
	const $patients = document.createElement('section');
	$patients.classList.add('patients');
	$patients.innerHTML = `
      <h1 class="patients-title" >Patients</h1>
      <ul class="patients-list" id="patients-list" >
			<header class="patients-list-header">
				<span>Name</span>
				<span>Age</span>
				<span>Id</span>
			</header>
		</ul>
	`;
	PatientService.getInstance()
		.getAll()
		.subscribe((patients) => {
			patients.forEach((patient) => {
				$patients.querySelector('#patients-list')?.append(Patient(patient));
			});
		});
	$patients.querySelector('#patients-list')?.insertAdjacentElement(
		'afterend',
		Navlink({
			content: 'Create a patient',
			href: 'patients/create',
		})
	);
	return $patients;
};
