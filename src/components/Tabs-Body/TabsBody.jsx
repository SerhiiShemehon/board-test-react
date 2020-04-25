import React from 'react';

import './TabsBody.scss';

import { Column } from '../'

export const TabsBody = ({
							 createColumnItem,
							 createPostItem,
							 tabs,
							 currentTab,
							 columns,
							 posts
}) => {
	return (
		<div className="tabs-body">
			{tabs.map( (tab) => <div key={tab.id} className={currentTab === tab.id ? 'tabs-item open' : 'tabs-item'}>
				<Column
					columns={columns}
					posts={posts}
					boardId={tab.id}
					createColumnItem={createColumnItem}
					createPostItem={createPostItem}
				/>
			</div> )}
		</div>
	)
}