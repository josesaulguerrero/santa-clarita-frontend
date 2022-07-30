import { Component } from '../../types/common/Component';
import { IPartialSpecialtyDTO } from '../../types/schema/SpecialtyDTO';
import './index.css';

export const Specialty: Component<IPartialSpecialtyDTO> = ({ name, id }) => {
	const $specialty = document.createElement('li');
	$specialty.classList.add('specialty');
	$specialty.innerHTML = `
      <h3 class="specialty-name" >${name}</h3>
      <span class="specialty-id" >${id}</span>
	`;
	return $specialty;
};
