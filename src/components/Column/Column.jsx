import React from 'react';

import './Column.scss';

import { ButtonAdd, ButtonDelete, Posts } from '../';

export const Column = ({
	columns,
	id
}) => {

	return (
		<div className="columns">
			<div className="columns-holder">
				{columns.map( (column) => <div key={column.id} className="column-item">
					<div className="column-header">
						{column.title}
						<ButtonDelete type='column' id={column.id} />
					</div>
					<div className="column-body">
						<Posts posts={column.posts} id={column.id} />
					</div>
				</div> )}
			</div>
			<ButtonAdd type="column" id={id} />
		</div>
	)
}