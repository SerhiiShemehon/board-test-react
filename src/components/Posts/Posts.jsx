import React from 'react';

import './Posts.scss';

import { ButtonAdd, PostItem } from '../'

export const Posts = ({
						  posts,
						  id,
						  createPostItem,
						  deleteItem,
						  editPost
}) => {
	const sortBy = (a,b) => {
		let c = new Date(a.date);
		let d = new Date(b.date);
		return c-d;
	}

	return (
		<div className="posts">
			<div className="posts-holder">
				{posts
					.sort(sortBy)
					.map( (post) => <PostItem
						key={post.id}
						post={post}
						deleteItem={deleteItem}
						editPost={editPost}
					/>)
				}
			</div>
			<div className="text-center">
				<ButtonAdd
					type="post"
					id={id}
					createPostItem={createPostItem}
				/>
			</div>
		</div>
	)
}