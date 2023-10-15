import { useState, useEffect, useRef } from 'react';

import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

import Panel from './Panel';

const Dropdown = ({ options, value, onChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const div = useRef();

	useEffect(event => {
		const handler = event => {
			if (!div.current) {
				return;
			};
			
			if (!div.current.contains(event.target)) {
				setIsOpen(false);
			};
		};
		
		document.addEventListener('click', handler, true);

		return () => {
			document.removeEventListener('click', handler);
		};
	}, []);

	const handleClick = () => {
		setIsOpen(currentIsOpen => !currentIsOpen);
	};

	const handleOptionClick = (option) => {
		setIsOpen(false);
		onChange(option);
	};

	const renderedOptions = options.map(option => {
		return (
			<div
				className="hover:bg-sky-100 rounded cursor-pointer p-1"
				onClick={() => handleOptionClick(option)}
				key={option.value}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={div} className="w-48 relative">
			<Panel
				className="flex justify-between items-center cursor-pointer"
				onClick={handleClick}
			>
				{value?.label || 'Select'}
				<span className="text-lg">
					{isOpen ? <GoChevronDown /> : <GoChevronLeft />}
				</span>
			</Panel>
			{isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
		</div>
	);
};

export default Dropdown;