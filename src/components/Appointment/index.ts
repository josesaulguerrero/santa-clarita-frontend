import { IPartialAppointmentDTO } from './../../types/schema/AppointmentDTO';
import { Component } from '../../types/common/Component';
import './index.css';

export const Appointment: Component<IPartialAppointmentDTO> = ({
	id,
	date,
}) => {
	const $appointment = document.createElement('li');
	$appointment.classList.add('appointment');
	$appointment.innerHTML = `
      <h3 class="appointment-date" >${new Date(date)}</h3>
      <span class="appointment-id" >${id}</span>
	`;
	return $appointment;
};
