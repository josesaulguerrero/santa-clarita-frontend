import { AppointmentService } from './../../services/appointment/index';
import { SpecialtyService } from '../../services/specialty';
import { Component } from '../../types/common/Component';
import './index.css';

const stringIsEmpty = (value: string) => {
	return value.trim() === '';
};

const onSubmit = (event: SubmitEvent) => {
	event.preventDefault();
	const $form = event.target as HTMLFormElement;
	const $patientIdInput = $form.querySelector('#patientId') as HTMLInputElement;
	const $specialtyInput = $form.querySelector('#specialty') as HTMLInputElement;
	const $formMessage = $form.querySelector('#form-message')!;
	$formMessage.innerHTML = '';
	if (!stringIsEmpty($patientIdInput.value)) {
		try {
			AppointmentService.getInstance().post({
				patientId: Number($patientIdInput.value),
				specialtyId: Number($specialtyInput.value),
			});
			$formMessage.innerHTML = 'Your request has been processed successfully.';
			$formMessage.classList.add('success');
		} catch (error) {
			$formMessage.innerHTML =
				'Something went wrong... Please try again later.';
			$formMessage.classList.add('error');
		}
	}
};

export const CreateAppointment: Component<void> = () => {
	const $createAppointmentForm = document.createElement('section');
	$createAppointmentForm.classList.add('create-appointment');
	$createAppointmentForm.innerHTML = `
		<h1 class="form-title" >Please enter the required information.</h1>
		<form class="create-appointment-form" id="create-appointment-form">
			<label for="patientId" class="form-label">
				<span class="label-message" >Enter the patient Id: </span>
				<input type="number" maxlength="50" id="patientId" name="patientId" required class="label-input">
			</label>
			<label for="specialty" class="form-label">
				<span class="label-message" >Pick up one of the following specialties: </span>
				<select name="specialty" id="specialty" disabled="true" required class="label-input"></select>
				<span class="loader" id="loader" >Loading... Please wait</span>
			</label>
			<span class="form-message" id="form-message" ></span>
			<button class="form-submit" type="submit">Submit</button>
		</form>
   `;
	const $specialtyInput = $createAppointmentForm.querySelector(
		'#specialty'
	) as HTMLInputElement;
	const $form = $createAppointmentForm.querySelector(
		'#create-appointment-form'
	)!;
	const $loader = $createAppointmentForm.querySelector('#loader');
	SpecialtyService.getInstance()
		.getAll()
		.subscribe((specialties) => {
			specialties.forEach(({ id, name }) => {
				$specialtyInput.insertAdjacentHTML(
					'beforeend',
					`<option value="${id}" id="${id}">${name}</option>`
				);
				$specialtyInput.disabled = false;
				$loader?.classList.add('hidden');
			});
		});
	($form as HTMLFormElement).onsubmit = onSubmit;
	return $createAppointmentForm;
};
