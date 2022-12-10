import { EnvironmentsEnum } from '@elrondnetwork/dapp-core/types';
import {
	NotificationModal,
	SignTransactionsModals,
	TransactionsToastList
} from '@elrondnetwork/dapp-core/UI';
import { DappProvider } from '@elrondnetwork/dapp-core/wrappers';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/layout';
import { routeNames, routes } from './config/routes';
import Login from './pages/login';

export default function App() {
	return (
		<BrowserRouter>
			<DappProvider environment={EnvironmentsEnum.devnet}>
				<Layout>
					<TransactionsToastList />
					<NotificationModal />
					<SignTransactionsModals />
					<Routes>
						<Route path={routeNames.login} element={<Login />} />
						{routes.map((route, index) => (
							<Route
								path={route.path}
								key={'route-key-' + index}
								element={<route.component />}
							/>
						))}
					</Routes>
				</Layout>
			</DappProvider>
		</BrowserRouter>
	);
}
