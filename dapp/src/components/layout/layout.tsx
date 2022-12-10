import { AuthenticatedRoutesWrapper } from '@elrondnetwork/dapp-core/wrappers';
import React from 'react';

import { routeNames, routes } from '../../config/routes';
import Footer from './footer';
import Navbar from './navbar';

// eslint-disable-next-line unicorn/prevent-abbreviations
interface ILayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
	return (
		<div className='h-screen flex flex-col text-color bg-primary'>
			<Navbar />

			<main className='h-full flex flex-col justify-center items-center'>
				<AuthenticatedRoutesWrapper
					routes={routes}
					unlockRoute={routeNames.login}
				>
					{children}
				</AuthenticatedRoutesWrapper>
			</main>
			<Footer />
		</div>
	);
}
