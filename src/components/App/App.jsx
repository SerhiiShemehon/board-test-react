import React, { useState } from 'react';
import './App.scss';

import { Header, Board, Footer } from '../';

import {BOARDS, COLUMNS, POSTS} from '../../constants';


export const App = () => {
	const [ boardsData, setBoards ] = useState(BOARDS);
	const [ columnsData, setColumns ] = useState(COLUMNS);
	const [ postsData, setPosts ] = useState(POSTS);

	const createBoardItem = (title) => {
		const newBoardsData = [
			...boardsData,
			{
				title: title,
				id: Date.now(),
				date: new Date(),
				columns: []
			}
		];
		setBoards(newBoardsData);
	}

	const createColumnItem = (title, idBoard) => {
		const newColumnsData = [
			...columnsData,
			{
				title: title,
				id: Date.now(),
				date: new Date(),
				boardId: idBoard
			}
		];
		setColumns(newColumnsData);
	}

	const createPostItem = (
		title,
		text,
		color,
		idColumn
	) => {
		const newPostData = [
			...postsData,
			{
				title: title,
				id: Date.now(),
				text: text,
				color: color,
				columnId: idColumn,
				date: new Date()
			}
		];
		setPosts(newPostData);
	}

	const deleteItem = (type, id) => {
        if (type === 'board') {
            if (boardsData.length > 1){
                setBoards(boardsData.filter(item => item.id !== id));
            }
        } else if (type === 'column') {
            setColumns(columnsData.filter(item => item.id !== id));
        } else {
            setPosts(postsData.filter(item => item.id !== id));
        }
    }

    const editPost = (title, text, color, id) => {
		const currentPost = postsData.find(post => post.id === id );
		const newPostItem = {...currentPost};
		newPostItem.title = title;
		newPostItem.text = text;
		newPostItem.color = color;


		const idIndex = postsData.findIndex(element => element.id === id);
		const newPostData = [
			...postsData.slice(0, idIndex),
			newPostItem,
			...postsData.slice(idIndex + 1),
		];
		setPosts(newPostData);
	}

	return (
		<div className="page-layout">
			<div className="wrapper">
				<Header />
				<main className="main">
					<div className="container">
						<div className="main-sheet">
							<Board
								boards={boardsData}
								columns={columnsData}
								posts={postsData}
								createBoardItem={createBoardItem}
								createColumnItem={createColumnItem}
								createPostItem={createPostItem}
                                deleteItem={deleteItem}
								editPost={editPost}
							/>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	)
}
