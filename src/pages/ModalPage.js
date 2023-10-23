import { useState } from 'react';

import Modal from '../components/Modal';
import Button from '../components/Button';

const ModalPage = () => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true)
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const actionBar = (
		<div>
			<Button primary onClick={handleClose}>I Accept</Button>
		</div>
	);

	const modal = (
		<Modal onClose={handleClose} actionBar={actionBar}>
			<p>
				Here is an agreement for you to accept
			</p>
		</Modal>
	);

	return (
		<div>
			<Button
				primary
				onClick={handleClick}
			>Open Modal</Button>
			{showModal && modal}
		</div>
	);
};

export default ModalPage;