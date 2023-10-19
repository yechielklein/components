import Link from './Link';

const Sidebar = () => {
	const links = [
		{ label: 'Dropdown', path: '/' },
		{ label: 'Accordion', path: '/accordion' },
		{ label: 'Buttons', path: '/buttons' }
	];

	const renderedLinks = links.map(link => {
		return (
			<Link
				key={link.label}
				to={link.path}
				className="mb-3"
				activeClassName="font-bold border-blue-500 border-l-4 p-2"
			>{link.label}</Link>
		);
	});

	return (
		<div className="sticky top-0 overflow-y-auto flex flex-col item-start ">
			{renderedLinks}
		</div>
	);
};

export default Sidebar;