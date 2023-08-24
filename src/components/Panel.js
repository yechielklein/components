import classnames from 'classnames';

const Panel = ({ children, className, ...rest }) => {
	const finalClassName = classnames(
		"border rounded p-3 shadow bg-white w-full",
		className
	);

	return (
		<div className={finalClassName} {...rest}>
			{children}
		</div>
	);
};

export default Panel;