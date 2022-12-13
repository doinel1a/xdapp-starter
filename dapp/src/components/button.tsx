import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

interface IButton {
	title: string;
	text: string;
	CSS?: string;
	icon?: IconProp;
	to?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
	title,
	text,
	CSS,
	icon,
	to,
	onClick
}: IButton) {
	if (to) {
		return (
			<Link
				title='Login with your wallet'
				to={to}
				className={`${buttonStyle} ${CSS ?? ''}`}
			>
				Login
				{icon ? (
					<>
						&nbsp; <FontAwesomeIcon icon={icon} />
					</>
				) : (
					<></>
				)}
			</Link>
		);
	}

	return (
		<button
			type='button'
			title={title}
			className={`${buttonStyle} ${CSS ?? ''}`}
			onClick={onClick}
		>
			<span>{text}</span>
			{icon ? (
				<>
					&nbsp; <FontAwesomeIcon icon={icon} />
				</>
			) : (
				<></>
			)}
		</button>
	);
}

const buttonStyle = `
	px-3 py-2 
	rounded-lg 
	bg-accent-primary transition-colors 
	hover:bg-accent-primary-state focus:bg-accent-primary-state
`;
