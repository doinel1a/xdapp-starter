import { useGetIsLoggedIn } from '@elrondnetwork/dapp-core/hooks';
import React from 'react';
import { Navigate } from 'react-router-dom';

import { routeNames } from '../../config/routes';

export default function AuthRedirectWrapper({
	children
}: {
	children: React.ReactNode;
}) {
	const isLoggedIn = useGetIsLoggedIn();

	if (isLoggedIn) return <Navigate to={routeNames.dashboard} />;

	return <>{children}</>;
}
