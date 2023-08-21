import { FaGrin, FaGrinAlt, FaGrinBeam, FaGrinHearts } from 'react-icons/fa';

import Button from '../components/Button';

const ButtonPage = () => {
	return (
		<div>
			<br />
			<div>
				<Button onClick={() => {console.log('Plain!')}}>
					<FaGrin />
					plain
				</Button>
			</div>
			<br />
			<div>
				<Button onClick={() => {console.log('Primary!')}} primary rounded>
					<FaGrinAlt />
					primary
				</Button>
			</div>
			<br />
			<div>
				<Button onClick={() => {console.log('Secondary!')}} secondary outline>
					<FaGrinBeam />
					secondary
				</Button>
			</div>
			<br />
			<div>
				<Button onClick={() => {console.log('Success!')}} success rounded outline>
					<FaGrinHearts />
					success
				</Button>
			</div>
			<br />
			<div>
				<Button onClick={() => {console.log('Warning!')}} warning>
					warning
				</Button>
			</div>
			<br />
			<div>
				<Button onClick={() => {console.log('Danger!')}} danger outline>
					danger
				</Button>
			</div>
		</div>
	);
};

export default ButtonPage;