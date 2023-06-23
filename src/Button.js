import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

const Button = ({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded
}) => {
	const classes = classnames(
		'px-3 py-1.5 border',
		{
			'bg-blue-500 text-white border-blue-500': primary,
			'bg-gray-900 text-white border-gray-900': secondary,
			'bg-green-500 text-white border-green-500': success,
			'bg-yellow-400 text-white border-yellow-400': warning,
			'bg-red-500 text-white border-red-500': danger,
			'bg-white': outline,
			'rounded-full': rounded,
			'text-blue-500': outline && primary,
			'text-gray-900': outline && secondary,
			'text-green-500': outline && success,
			'text-yellow-400': outline && warning,
			'text-red-500': outline && danger
		}
	);

	const mergedClasses = twMerge(`${classes}`);

	return (
		<button className={mergedClasses}>
			{children}
		</button>
	);
};

Button.propTypes = {	
	checkButtonVariation: ({
		primary,
		secondary,
		success,
		warning,
		danger
	}) => {
		if (!!primary + !!secondary + !!success + !!warning + !!danger > 1) {
			throw new Error('Button can only have one variation');
		};
	}
};

export default Button;