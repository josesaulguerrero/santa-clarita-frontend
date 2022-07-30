import { Component } from '../../types/common/Component';
import './index.css';
import { Navlink } from '../../components/Navlink';
import { Appointment } from '../../components/Appointment';
import { AppointmentService } from '../../services/appointment';

export const Appointments: Component<void> = () => {
	const $appointments = document.createElement('section');
	$appointments.classList.add('appointments');
	$appointments.innerHTML = `
      <h1 class="appointments-title" >appointments</h1>
      <ul class="appointments-list" id="appointments-list" >
			<header class="appointments-list-header">
				<span>Date</span>
				<span>Id</span>
			</header>
			<h3 class="message" id="message"></h3>
		</ul>
	`;
	AppointmentService.getInstance()
		.getAll()
		.subscribe((appointments) => {
			if (appointments.length <= 0) {
				$appointments.querySelector('#message')!.innerHTML =
					'There are no appointments yet!';
			}
			appointments.forEach((appointment) => {
				$appointments
					.querySelector('#appointments-list')
					?.append(Appointment(appointment));
			});
		});
	$appointments.querySelector('#appointments-list')?.insertAdjacentElement(
		'afterend',
		Navlink({
			content: 'Create Appointment',
			href: 'appointments/create',
		})
	);
	return $appointments;
};
