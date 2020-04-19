import React from 'react';

import './PostItem.scss';

import { ButtonEdit, ButtonDelete } from '../';

export const PostItem = ({ post }) => {
	const postStyle = {
		background: post.color
	}
	return (
		<div className="post-item" style={postStyle}>
			<div className="post-title">
				{post.title}
				<ButtonEdit type='post' id={post.id} />
				<ButtonDelete type='post' id={post.id} />
			</div>
			<div className="post-text">{post.text}</div>
		</div>
	)
}