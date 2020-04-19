import React from 'react';

import './Posts.scss';

import { ButtonAdd, PostItem } from '../'

export const Posts = ({
	posts,
	id
}) => {

	return (
		<div className="posts">
			<div className="posts-holder">
				{posts.map( (post) => <PostItem key={post.id} post={post} />)}
			</div>
			<div className="text-center">
				<ButtonAdd type="post" id={id} />
			</div>
		</div>
	)
}