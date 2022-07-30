import { SpecialistService } from './../../services/specialist/index';
import { Component } from '../../types/common/Component';
import './index.css';

const stringIsEmpty = (value: string) => {
	return value.trim() === '';
};

const onSubmit = (event: SubmitEvent) => {
	event.preventDefault();
	const $form = event.target as HTMLFormElement;
	const $dniInput = $form.querySelector('#dni') as HTMLInputElement;
	const $nameInput = $form.querySelector('#fullname') as HTMLInputElement;
	const $ageInput = $form.querySelector('#age') as HTMLInputElement;
	const $formMessage = $form.querySelector('#form-message')!;
	$formMessage.innerHTML = '';
	if (
		!stringIsEmpty($dniInput.value) ||
		!stringIsEmpty($ageInput.value) ||
		!stringIsEmpty($nameInput.value)
	) {
		try {
			SpecialistService.getInstance().post({
				age: $ageInput.value,
				dni: $dniInput.value,
				fullName: $nameInput.value,
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

export const CreateSpecialist: Component<void> = () => {
	const $createSpecialistForm = document.createElement('section');
	$createSpecialistForm.classList.add('create-specialist');
	$createSpecialistForm.innerHTML = `
		<h1 class="form-title" >Please enter the required information.</h1>
		<form class="create-specialist-form" id="create-specialist-form">
			<label for="dni" class="form-label">
				<span class="label-message" >Enter their DNI number: </span>
				<input type="text" maxlength="15" id="dni" name="dni" required class="label-input">
			</label>
			<label for="fullname" class="form-label">
				<span class="label-message" >Enter their name: </span>
				<input type="text" maxlength="50" id="fullname" name="fullname" required class="label-input">
			</label>
			<label for="age" class="form-label">
				<span class="label-message">Enter their age: </span>
				<input type="number" max="80" min="18" id="age" name="age" required class="label-input">
			</label>
			<span class="form-message success" id="form-message" ></span>
			<button class="form-submit" type="submit">Submit</button>
		</form>
   `;
	const $form = $createSpecialistForm.querySelector('#create-specialist-form');
	($form as HTMLFormElement).onsubmit = onSubmit;
	return $createSpecialistForm;
};
