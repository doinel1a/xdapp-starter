import React from 'react';

import AuthRedirectWrapper from '../components/helpers/auth-redirect-wrapper';
import PageWithTitle from '../components/helpers/page-with-title';

function HomePage() {
	return (
		<div>
			<h1>Home</h1>
		</div>
	);
}

export default function Home() {
	return (
		<AuthRedirectWrapper>
			<PageWithTitle title='xDapp Starter'>
				<HomePage />
			</PageWithTitle>
		</AuthRedirectWrapper>
	);
}
