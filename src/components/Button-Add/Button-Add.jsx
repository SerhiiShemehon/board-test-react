import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './Button-Add.scss';

export const ButtonAdd = ({
	type,
	id = false
}) => {

	return (
		<button
			className="button-add"
			onClick={()=> console.log('create '+type)}
		>
			<FontAwesomeIcon icon={faPlus} />
		</button>
	)
}