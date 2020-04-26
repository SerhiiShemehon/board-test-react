import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './Button-Delete.scss';

export const ButtonDelete = ({
	type,
	deleteItem,
	id = false
}) => {

	return (
		<button
			className="button-delete"
			onClick={()=> deleteItem(type, id)}
		>
			<FontAwesomeIcon icon={faTrashAlt} />
		</button>
	)
}