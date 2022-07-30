import { PatientService } from '../../services/patient/index';
import { SpecialistService } from '../../services/specialist';
import { SpecialtyService } from '../../services/specialty';
import { Component } from '../../types/common/Component';
import './index.css';

const stringIsEmpty = (value: string) => {
	return value.trim() === '';
};

const onSubmit = (event: SubmitEvent) => {
	event.preventDefault();
	const $form = event.target as HTMLFormElement;
	const $nameInput = $form.querySelector('#name') as HTMLInputElement;
	const $specialistInput = $form.querySelector(
		'#specialist'
	) as HTMLInputElement;
	const $formMessage = $form.querySelector('#form-message')!;
	$formMessage.innerHTML = '';
	if (!stringIsEmpty($nameInput.value)) {
		try {
			SpecialtyService.getInstance().post({
				name: $nameInput.value,
				specialistId: Number($specialistInput.value),
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

export const CreateSpecialty: Component<void> = () => {
	const $createPatientForm = document.createElement('section');
	$createPatientForm.classList.add('create-patient');
	$createPatientForm.innerHTML = `
		<h1 class="form-title" >Please enter the required information.</h1>
		<form class="create-patient-form" id="create-patient-form">
			<label for="name" class="form-label">
				<span class="label-message" >Enter the new specialty name: </span>
				<input type="text" maxlength="50" id="name" name="name" required class="label-input">
			</label>
			<label for="specialist" class="form-label">
				<span class="label-message" >Pick up one of the following specialists to be in charge of this specialty: </span>
				<select name="specialist" id="specialist" disabled="true" required class="label-input"></select>
				<span class="loader" id="loader" >Loading... Please wait</span>
			</label>
			<span class="form-message success" id="form-message" ></span>
			<button class="form-submit" type="submit">Submit</button>
		</form>
   `;
	const $specialistInput = $createPatientForm.querySelector(
		'#specialist'
	) as HTMLInputElement;
	const $loader = $createPatientForm.querySelector('#loader');
	SpecialistService.getInstance()
		.getAllAvailable()
		.subscribe((availableSpecialists) => {
			availableSpecialists.forEach(({ fullName, id }) => {
				$specialistInput.insertAdjacentHTML(
					'beforeend',
					`<option value="${id}">${fullName}</option>`
				);
				$specialistInput.disabled = false;
				$loader?.classList.add('hidden');
			});
		});
	const $form = $createPatientForm.querySelector('#create-patient-form');
	($form as HTMLFormElement).onsubmit = onSubmit;
	return $createPatientForm;
};
