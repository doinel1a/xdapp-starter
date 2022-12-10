import React from 'react';

import AuthRedirectWrapper from '../components/helpers/auth-redirect-wrapper';
import PageWithTitle from '../components/helpers/page-with-title';

function LoginPage() {
	return (
		<div>
			<h1>Login</h1>
		</div>
	);
}

export default function Login() {
	return (
		<AuthRedirectWrapper>
			<PageWithTitle title='Login — xDapp Starter'>
				<LoginPage />
			</PageWithTitle>
		</AuthRedirectWrapper>
	);
}
