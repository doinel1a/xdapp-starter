import React from 'react';

export default function Loader() {
	return (
		<div className='w-full h-full flex flex-col justify-center items-center bg-primary'>
			<span className='loader' />
			<h1 className='mt-2 text-2xl'>LOADING. . .</h1>
		</div>
	);
}
