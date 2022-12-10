import { useGetIsLoggedIn } from '@elrondnetwork/dapp-core/hooks';
import { logout } from '@elrondnetwork/dapp-core/utils';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

import { routeNames } from '../../config/routes';

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
				<Link
					title='Login with your wallet'
					to={routeNames.login}
					className='px-3 py-2 rounded-lg bg-accent-primary
								transition-colors hover:bg-accent-primary-state focus:bg-accent-primary-state'
				>
					Login &nbsp;
					<FontAwesomeIcon icon={faUnlock} />
				</Link>
			) : (
				<button
					type='button'
					title='Logout dapp'
					className='px-3 py-2 rounded-lg bg-accent-primary
				transition-colors hover:bg-accent-primary-state focus:bg-accent-primary-state'
					onClick={() => logout()}
				>
					Logout &nbsp;
					<FontAwesomeIcon icon={faLock} />
				</button>
			)}
		</nav>
	);
}
