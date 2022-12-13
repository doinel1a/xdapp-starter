import { useGetIsLoggedIn } from '@elrondnetwork/dapp-core/hooks';
import { logout } from '@elrondnetwork/dapp-core/utils';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

import { routeNames } from '../../config/routes';
import Button from '../button';

export default function Navbar() {
	const isLoggedIn = useGetIsLoggedIn();

	return (
		<nav className='w-full flex items-center px-8 py-4 bg-secondary'>
			<Link
				title='Home'
				to={routeNames.home}
				className='mr-auto text-2xl transition-colors hover:text-accent-primary focus:text-accent-primary'
			>
				xDapp Starter
			</Link>
			{!isLoggedIn ? (
				<Button
					title='Login with your wallet'
					text='Login'
					icon={faUnlock}
					to={routeNames.login}
				/>
			) : (
				<Button
					title='Logout dapp'
					text='Logout'
					icon={faLock}
					onClick={() => logout()}
				/>
			)}
		</nav>
	);
}
