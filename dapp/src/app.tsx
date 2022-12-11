import { EnvironmentsEnum } from '@elrondnetwork/dapp-core/types';
import {
	NotificationModal,
	SignTransactionsModals,
	TransactionsToastList
} from '@elrondnetwork/dapp-core/UI';
import { DappProvider } from '@elrondnetwork/dapp-core/wrappers';
import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/layout';
import { routeNames } from './config/routes';
import Home from './pages/home';

const Login = lazy(() => wait(1000).then(() => import('./pages/login')));
const Dashboard = lazy(() =>
	wait(1000).then(() => import('./pages/dashboard'))
);

export default function App() {
	return (
		<BrowserRouter>
			<DappProvider environment={EnvironmentsEnum.devnet}>
				<Layout>
					<TransactionsToastList />
					<NotificationModal />
					<SignTransactionsModals />
					<Routes>
						<Route path={routeNames.home} element={<Home />} />
						<Route path={routeNames.login} element={<Login />} />
						<Route
							path={routeNames.dashboard}
							element={<Dashboard />}
						/>
					</Routes>
				</Layout>
			</DappProvider>
		</BrowserRouter>
	);
}

function wait(time: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
}
