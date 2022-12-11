import { useGetNetworkConfig } from '@elrondnetwork/dapp-core/hooks';
import { ContractFunction, ResultsParser } from '@elrondnetwork/erdjs/out';
import { ProxyNetworkProvider } from '@elrondnetwork/erdjs-network-providers/out';
import { useEffect, useState } from 'react';

import counterContract from '../contracts/counter-contract';

const resultsParser = new ResultsParser();

export default function useCounter() {
	const [counter, setCounter] = useState<string>();
	const { network } = useGetNetworkConfig();

	async function getCounter() {
		try {
			const query = counterContract.createQuery({
				func: new ContractFunction('getCounter')
			});

			const provider = new ProxyNetworkProvider(network.apiAddress);
			const response = await provider.queryContract(query);
			const endpoint = counterContract.getEndpoint('getCounter');

			const { firstValue } = resultsParser.parseQueryResponse(
				response,
				endpoint
			);

			setCounter(firstValue ? firstValue.toString() : '');
		} catch (error) {
			console.error('Unable to call getCounter', error);
		}
	}

	useEffect(
		() => {
			getCounter();
		} /* [] */
	);

	return counter || '0';
}
