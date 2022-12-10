import React, { useEffect } from 'react';

// eslint-disable-next-line unicorn/prevent-abbreviations
interface PageWithTitlePageProps {
	title: string;
	children: React.ReactNode;
}

export default function PageWithTitle({
	title,
	children
}: PageWithTitlePageProps) {
	useEffect(
		() => {
			document.title = title;
		} /* , [] */
	);

	return <>{children}</>;
}
