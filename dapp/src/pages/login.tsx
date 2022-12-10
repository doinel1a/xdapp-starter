import { useWebWalletLogin } from '@elrondnetwork/dapp-core/hooks/login/useWebWalletLogin';
import React from 'react';

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
			<button
				className='mt-auto px-3 py-2 rounded-lg bg-accent-primary
								transition-colors hover:bg-accent-primary-state focus:bg-accent-primary-state'
				onClick={() => initiateLogin()}
			>
				Web wallet
			</button>
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
