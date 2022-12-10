import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Footer() {
	return (
		<footer className='flex justify-center px-4 py-2 bg-secondary'>
			<a
				title='Check out my Businesslink'
				href='https://business-link.d1a.app/'
				{...{
					target: '_blank'
				}}
				className='text-sm'
			>
				Made with{' '}
				<FontAwesomeIcon icon={faHeart} className='text-red-500' /> by
				Doinel1A
			</a>
		</footer>
	);
}
