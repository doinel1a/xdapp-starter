import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Counter from './components/counter';
import Layout from './components/layout/layout';

export default function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Counter />
			</Layout>
		</BrowserRouter>
	);
}
