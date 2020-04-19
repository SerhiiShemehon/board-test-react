import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import './Button-Edit.scss';

export const ButtonEdit = ({
	type,
	id = false
}) => {

	return (
		<button
			className="button-edit"
			onClick={()=> console.log('edit '+type)}
		>
			<FontAwesomeIcon icon={faEdit} />
		</button>
	)
}