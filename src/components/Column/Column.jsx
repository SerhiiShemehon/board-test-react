import React from 'react';

import './Column.scss';

import { ButtonAdd, ButtonDelete, Posts } from '../';

export const Column = ({
						   columns,
						   posts,
						   boardId,
						   createColumnItem,
						   createPostItem
}) => {
	const sortBy = (a,b) => {
		let c = new Date(a.date);
		let d = new Date(b.date);
		return c-d;
	}

	return (
		<div className="columns">
			<div className="columns-holder">
				{columns
					.filter( (column) => column.boardId === boardId)
					.sort(sortBy)
					.map( (column) => <div key={column.id} className="column-item">
						<div className="column-header">
							{column.title}
							<ButtonDelete type='column' id={column.id} />
						</div>
						<div className="column-body">
							<Posts
								posts={posts.filter( post => post.columnId === column.id)}
								id={column.id}
								createPostItem={createPostItem}
							/>
						</div>
					</div> )
				}
			</div>
			<ButtonAdd
				type="column"
				id={boardId}
				createColumnItem={createColumnItem}
			/>
		</div>
	)
}