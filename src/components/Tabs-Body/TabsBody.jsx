import React from 'react';

import './TabsBody.scss';

import { Column } from '../'

export const TabsBody = ({
	tabs,
	currentTab
}) => {

	return (
		<div className="tabs-body">
			{tabs.map( (tab) => <div key={tab.id} className={currentTab === tab.id ? 'tabs-item open' : 'tabs-item'}>
				<Column columns={tab.columns} id={tab.id} />
			</div> )}
		</div>
	)
}