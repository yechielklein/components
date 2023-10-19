import classnames from 'classnames';

import useNavigation from '../hooks/use-navigation';

const Link = ({ children, to, className, activeClassName }) => {
	const { navigate, currentPath } = useNavigation();

	const classes = classnames(
		'text-blue-500',
		className,
		to === currentPath && activeClassName
	);

	const handleClick = (event) => {
		if (event.ctrlKey || event.metaKey) return;

		event.preventDefault();

		navigate(to);
	};

	return (
		<a className={classes} href={to} onClick={handleClick}>
			{children}
		</a>
	);
};

export default Link;