import { SpecialistService } from '../../services/specialist';
import { SpecialtyService } from '../../services/specialty';
import { Component } from '../../types/common/Component';
import './index.css';

const stringIsEmpty = (value: string) => {
	return value.trim() === '';
};

const removeOption = ($input: HTMLInputElement): void => {
	const optionsLeft = Array.from($input.querySelectorAll('option')!).filter(
		(option) => option.id !== $input.value
	);
	$input.innerHTML = '';
	$input.append(...optionsLeft);
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
			removeOption($specialistInput);
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
	const $createSpecialtyForm = document.createElement('section');
	$createSpecialtyForm.classList.add('create-specialty');
	$createSpecialtyForm.innerHTML = `
		<h1 class="form-title" >Please enter the required information.</h1>
		<form class="create-specialty-form" id="create-specialty-form">
			<label for="name" class="form-label">
				<span class="label-message" >Enter the new specialty name: </span>
				<input type="text" maxlength="50" id="name" name="name" required class="label-input">
			</label>
			<label for="specialist" class="form-label">
				<span class="label-message" >Pick up one of the following specialists to be in charge of this specialty: </span>
				<select name="specialist" id="specialist" disabled="true" required class="label-input"></select>
				<span class="loader" id="loader" >Loading... Please wait</span>
			</label>
			<span class="form-message" id="form-message" ></span>
			<button class="form-submit" type="submit">Submit</button>
		</form>
   `;
	const $specialistInput = $createSpecialtyForm.querySelector(
		'#specialist'
	) as HTMLInputElement;
	const $form = $createSpecialtyForm.querySelector('#create-specialty-form')!;
	const $loader = $createSpecialtyForm.querySelector('#loader');
	SpecialistService.getInstance()
		.getAllAvailable()
		.subscribe((availableSpecialists) => {
			availableSpecialists.forEach(({ fullName, id }) => {
				$specialistInput.insertAdjacentHTML(
					'beforeend',
					`<option value="${id}" id="${id}">${fullName}</option>`
				);
				$specialistInput.disabled = false;
				$loader?.classList.add('hidden');
			});
		});
	($form as HTMLFormElement).onsubmit = onSubmit;
	return $createSpecialtyForm;
};
