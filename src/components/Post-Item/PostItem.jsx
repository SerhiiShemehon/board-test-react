import React, {useState} from 'react';

import './PostItem.scss';

import { ButtonEdit, ButtonDelete, EditForm } from '../';

export const PostItem = ({
							 post,
							 deleteItem,
							 editPost
}) => {
	const [isEdit, setEdit] = useState(false);

	const changeTextForm = () => {
		setEdit(!isEdit);
	}

	const postStyle = {
		background: post.color
	}
	return (
		<div className="post-item" style={postStyle}>
			{isEdit
				? <EditForm
					editPost={editPost}
					id={post.id}
					changeTextForm={changeTextForm}
					title={post.title}
					text={post.text}
					color={post.color}
				/>
				: <div className="post-holder">
					<div className="post-title">
						{post.title}
						<ButtonEdit
							type='post'
							id={post.id}
							changeTextForm={changeTextForm}
						/>
						<ButtonDelete
							type='post'
							id={post.id}
							deleteItem={deleteItem}
						/>
					</div>
					<div className="post-text">{post.text}</div>
				</div>
			}
		</div>
	)
}