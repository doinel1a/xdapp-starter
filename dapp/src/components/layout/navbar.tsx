import { useGetIsLoggedIn } from '@elrondnetwork/dapp-core/hooks';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Navbar() {
	const isLoggedIn = useGetIsLoggedIn();

	return (
		<nav className='w-full flex items-center px-8 py-4 bg-secondary'>
			<a title='Home' href='HOME URL' className='text-2xl mr-auto'>
				<span className='transition-colors hover:text-accent-primary focus:text-accent-primary'>
					xDapp
				</span>{' '}
				—{' '}
				<span className='transition-colors hover:text-accent-primary focus:text-accent-primary'>
					Starter
				</span>
			</a>
			<a
				title='Login with your wallet'
				href='UNLOCK URL'
				{...{
					target: '_blank'
				}}
				className='px-3 py-2 rounded-lg bg-accent-primary
        transition-colors hover:bg-accent-primary-state focus:bg-accent-primary-state'
			>
				{!isLoggedIn ? (
					<>
						Login &nbsp;
						<FontAwesomeIcon icon={faUnlock} />
					</>
				) : (
					<>
						Logout &nbsp;
						<FontAwesomeIcon icon={faLock} />
					</>
				)}
			</a>
		</nav>
	);
}
