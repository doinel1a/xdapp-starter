import { useWebWalletLogin } from '@elrondnetwork/dapp-core/hooks/login/useWebWalletLogin';
import React from 'react';

import Button from '../components/button';
import AuthRedirectWrapper from '../components/helpers/auth-redirect-wrapper';
import PageWithTitle from '../components/helpers/page-with-title';
import { routeNames } from '../config/routes';

function LoginPage() {
	const [initiateLogin] = useWebWalletLogin({
		callbackRoute: routeNames.dashboard
	});

	return (
		<section className='w-96 h-72 container flex flex-col p-10 rounded-xl border border-tertiary bg-secondary'>
			<h1 className='text-2xl'>Login</h1>
			<h2 className='text-xl'>Connect to a wallet:</h2>
			<Button
				title='Login with Web wallet'
				text='Web wallet'
				CSS='mt-auto'
				onClick={() => initiateLogin()}
			/>
		</section>
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
