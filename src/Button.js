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
	return (
		<button className="
			bg-blue-500
			text-white
			px-3
			py-1.5
			border
			border-blue-600
		">
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