import React from 'react';

import Button from './button';

// eslint-disable-next-line unicorn/prevent-abbreviations
interface ICounterProps {
	counter: string;
	onIncrement: () => Promise<void>;
	onDecrement: () => Promise<void>;
}

export default function Counter({
	counter,
	onIncrement,
	onDecrement
}: ICounterProps) {
	return (
		<>
			<section className='w-96 h-72 container flex flex-col justify-between items-center py-10 rounded-xl border border-tertiary bg-secondary'>
				<h2 className='text-6xl'>{counter}</h2>
				<div className='flex gap-x-5'>
					<Button text='+ 1' onClick={() => onIncrement()} />
					<Button text='- 1' onClick={() => onDecrement()} />
				</div>
			</section>
		</>
	);
}
