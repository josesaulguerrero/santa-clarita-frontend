import { Component } from '../../types/common/Component';
import { IPartialSpecialistDTO } from '../../types/schema/SpecialistDTO';
import './index.css';

export const Specialist: Component<IPartialSpecialistDTO> = ({
	fullName,
	id,
}) => {
	const $specialist = document.createElement('li');
	$specialist.classList.add('specialist');
	$specialist.innerHTML = `
      <h3 class="specialist-name" >${fullName}</h3>
      <span class="specialist-id" >${id}</span>
	`;
	return $specialist;
};
