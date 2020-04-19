import React from 'react';

import './TabsNav.scss';

import { ButtonDelete } from '../'

const NavItemTab = ({
	title,
	id,
	toggleTabs,
	currentTab
}) => {
	const currentClass = currentTab === id ? 'btn-tab open' : 'btn-tab'

	return (
		<div
			className={currentClass}
			onClick={
				() => toggleTabs(id)
			}
		>
			{title}
			<ButtonDelete type='board' id={id} />
		</div>
	)
}

export const TabsNav = ({
	tabs,
	currentTab,
	toggleTabs
}) => {
	return (
		<ul className="tabs-nav">
			{tabs.map( (nav) => <li key={nav.id}>
				<NavItemTab
					title={nav.title}
					id={nav.id}
					toggleTabs={toggleTabs}
					currentTab={currentTab}
				/>
			</li> )}
		</ul>
	)
}