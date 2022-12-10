import React from 'react';

import PageWithTitle from '../components/helpers/page-with-title';

function DashboardPage() {
	return (
		<div>
			<h1>Dashboard</h1>
		</div>
	);
}

export default function Dashboard() {
	return (
		<PageWithTitle title='Dashboard — xDapp Starter'>
			<DashboardPage />
		</PageWithTitle>
	);
}
