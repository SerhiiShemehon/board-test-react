import React from 'react';

import './App.scss';

import { Header, Board, Footer } from '../';

const boards = [
	{
		title: 'board 1',
		id: 1,
		columns: [
			{
				title: 'column 1',
				id: 11,
				posts: [
					{
						title: 'post 1',
						id: 111,
						text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
						color: 'blue'
					},
					{
						title: 'post 2',
						id: 112,
						text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
						color: 'green'
					}
				]
			},
			{
				title: 'column 2',
				id: 12,
				posts: [
					{
						title: 'post 1',
						id: 121,
						text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
						color: 'blue'
					},
					{
						title: 'post 2',
						id: 122,
						text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
						color: 'blue'
					},
					{
						title: 'post 3',
						id: 123,
						text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
						color: 'red'
					}
				]
			}
		]
	},
	{
		title: 'board 2',
		id: 2,
		columns: [
			{
				title: 'column 1',
				id: 21,
				posts: [
					{
						title: 'post 1',
						id: 211,
						text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
						color: 'yellow'
					},
					{
						title: 'post 2',
						id: 212,
						text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
						color: 'red'
					}
				]
			},
			{
				title: 'column 2',
				id: 22,
				posts: [
					{
						title: 'post 1',
						id: 221,
						text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
						color: 'yellow'
					},
					{
						title: 'post 2',
						id: 222,
						text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
						color: 'red'
					},
					{
						title: 'post 3',
						id: 223,
						text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
						color: 'red'
					}
				]
			},
			{
				title: 'column 3',
				id: 23,
				posts: [
					{
						title: 'post 1',
						id: 231,
						text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
						color: 'red'
					}
				]
			}
		]
	},
	{
		title: 'board 3',
		id: 3,
		columns: [
			{
				title: 'column 1',
				id: 31,
				posts: [
					{
						title: 'post 1',
						id: 311,
						text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
						color: 'blue'
					},
					{
						title: 'post 2',
						id: 312,
						text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
						color: 'green'
					},
					{
						title: 'post 3',
						id: 313,
						text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, culpa!',
						color: 'orange'
					}
				]
			}
		]
	}
]

export const App = () => {
	return (
		<div className="pade-layout">
			<div className="wrapper">
				<Header />
				<main className="main">
					<div className="container">
						<div className="main-sheet">
							<Board boards={boards} />
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	)
}
