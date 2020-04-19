import React, { useState } from 'react';

import './Board.scss';

import { ButtonAdd, TabsNav, TabsBody } from '../';

export const Board = ({boards}) => {
	const [currentTab, changeTabs] = useState(boards[0].id);

	const toggleTabs = (tabItem) => {
		changeTabs(tabItem);
	}


	return (
		<main className="board">
			<div className="container">
				<div className="board-nav">
					<TabsNav
						tabs={boards}
						currentTab={currentTab}
						toggleTabs={toggleTabs}
					/>
					<ButtonAdd type="board" />
				</div>
				<div className="board-holder">
					<TabsBody
						tabs={boards}
						currentTab={currentTab}
					/>
				</div>
			</div>
		</main>
	)
}