import React, { useState } from 'react';
import './App.scss';

import { Header, Board, Footer } from '../';

const boards = [
	{
		title: 'board 1',
		id: 1,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'board 2',
		id: 2,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'board 3',
		id: 3,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	}
]
const columns = [
	{
		title: 'column 1',
		id: 11,
		boardId: 1,
		date: 'Sat Apr 24 2020 19:11:55 GMT+0300'
	},
	{
		title: 'column 2',
		id: 12,
		boardId: 1,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'column 1',
		id: 21,
		boardId: 2,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'column 2',
		id: 22,
		boardId: 2,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'column 3',
		id: 23,
		boardId: 2,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'column 1',
		id: 31,
		boardId: 3,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	}
]
const posts = [
	{
		title: 'post 1',
		id: 111,
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
		color: 'blue',
		columnId: 11,
		date: 'Sat Apr 5 2020 19:11:55 GMT+0300'
	},
	{
		title: 'post 2',
		id: 112,
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
		color: 'green',
		columnId: 11,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'post 1',
		id: 121,
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
		color: 'blue',
		columnId: 12,
		date: 'Sat Apr 28 2020 19:11:55 GMT+0300'
	},
	{
		title: 'post 2',
		id: 122,
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
		color: 'blue',
		columnId: 12,
		date: 'Sat Apr 26 2020 19:11:55 GMT+0300'
	},
	{
		title: 'post 3',
		id: 123,
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
		color: 'red',
		columnId: 12,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'post 1',
		id: 211,
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
		color: 'yellow',
		columnId: 21,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'post 2',
		id: 212,
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
		color: 'red',
		columnId: 21,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'post 1',
		id: 221,
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
		color: 'yellow',
		columnId: 22,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'post 2',
		id: 222,
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
		color: 'red',
		columnId: 22,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'post 3',
		id: 223,
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
		color: 'red',
		columnId: 22,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'post 1',
		id: 231,
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
		color: 'red',
		columnId: 23,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'post 1',
		id: 311,
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
		color: 'blue',
		columnId: 31,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'post 2',
		id: 312,
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
		color: 'green',
		columnId: 31,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	},
	{
		title: 'post 3',
		id: 313,
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
		color: 'orange',
		columnId: 31,
		date: 'Sat Apr 25 2020 19:11:55 GMT+0300'
	}
]


export const App = () => {
	const [ boardsData, setBoards ] = useState(boards);
	const [ columnsData, setColumns ] = useState(columns);
	const [ postsData, setPosts ] = useState(posts);

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
							/>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	)
}
