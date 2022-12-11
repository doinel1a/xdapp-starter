import { useGetAccountInfo } from '@elrondnetwork/dapp-core/hooks';
import { sendTransactions } from '@elrondnetwork/dapp-core/services';
import { refreshAccount } from '@elrondnetwork/dapp-core/utils';
import React from 'react';

import Counter from '../components/counter';
import PageWithTitle from '../components/helpers/page-with-title';
import { counterContractAddress } from '../config/devnet';
import useCounter from '../hooks/use-counter';

function DashboardPage() {
	useGetAccountInfo();
	const counter = useCounter();

	return (
		<div>
			<Counter
				counter={counter}
				onIncrement={incrementTransaction}
				onDecrement={decrementTransaction}
			/>
		</div>
	);
}

export default function Dashboard() {
	return (
		<PageWithTitle title='Dashboard — xDapp Starter'>
			<DashboardPage />
		</PageWithTitle>
	);
}

async function incrementTransaction() {
	const transaction = {
		value: 0,
		data: 'increment@01',
		receiver: counterContractAddress,
		gasLimit: '2000000'
	};

	await refreshAccount();

	/* const { sessionId error } = */ await sendTransactions({
		transactions: transaction,
		transactionsDisplayInfo: {
			processingMessage: 'Processing Increment transaction',
			errorMessage: 'An error has occured during Increment',
			successMessage: 'Increment transaction successful'
		},
		redirectAfterSign: false
	});
}

async function decrementTransaction() {
	const transaction = {
		value: 0,
		data: 'decrement@01',
		receiver: counterContractAddress,
		gasLimit: '2000000'
	};

	await refreshAccount();

	/* const { sessionId error } = */ await sendTransactions({
		transactions: transaction,
		transactionsDisplayInfo: {
			processingMessage: 'Processing Decrement transaction',
			errorMessage: 'An error has occured during Decrement',
			successMessage: 'Decrement transaction successful'
		},
		redirectAfterSign: false
	});
}
