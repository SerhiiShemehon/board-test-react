import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import './Button-Edit.scss';

export const ButtonEdit = ({
							   type,
							   changeTextForm,
							   id = false
}) => {

	return (
		<button
			className="button-edit"
			onClick={changeTextForm}
		>
			<FontAwesomeIcon icon={faEdit} />
		</button>
	)
}