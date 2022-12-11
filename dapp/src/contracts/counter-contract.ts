import {
	AbiRegistry,
	Address,
	SmartContract,
	SmartContractAbi
} from '@elrondnetwork/erdjs/out';

import { counterContractAddress } from '../config/devnet';
import abi from '../contracts-abi/counter.abi.json';

const abiRegistry = AbiRegistry.create(abi);
const contractAbi = new SmartContractAbi(abiRegistry);

const counterContract = new SmartContract({
	address: new Address(counterContractAddress),
	abi: contractAbi
});

export default counterContract;
