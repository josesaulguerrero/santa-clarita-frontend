import { Component } from '../../types/common/Component';

export const CreateSpecialist: Component<void> = () => {
	const $createSpecialistForm = document.createElement('section');
	$createSpecialistForm.classList.add('create-specialist');
	$createSpecialistForm.innerHTML = `
      <form class="create-specialist-form">
         dni
         fullName
         age
      </form>
	`;
	return $createSpecialistForm;
};
