import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './Button-Add.scss';

import { AddForm } from '../';

export const ButtonAdd = ({
							  type,
							  createBoardItem,
							  createColumnItem,
							  createPostItem,
							  id = false
}) => {
	const [ isForm, setForm ] = useState(false);

	const changeButtonForm = () => {
		setForm(!isForm)
	}

	return (
		isForm
			? <AddForm
				type={type}
				createBoardItem={createBoardItem}
				createColumnItem={createColumnItem}
				createPostItem={createPostItem}
				id={id}
				changeButtonForm={changeButtonForm}
			/>
			: <button
				className="button-add"
				onClick={changeButtonForm}
			>
				<FontAwesomeIcon icon={faPlus} />
			</button>

	)
}