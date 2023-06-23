import { FaGrin, FaGrinAlt, FaGrinBeam, FaGrinHearts } from 'react-icons/fa';

import Button from './Button';

const App = () => {
	return (
		<div>
			<br />
			<div>
				<Button>
					<FaGrin />
					plain
				</Button>
			</div>
			<br />
			<div>
				<Button primary rounded>
					<FaGrinAlt />
					primary
				</Button>
			</div>
			<br />
			<div>
				<Button secondary outline>
					<FaGrinBeam />
					secondary
				</Button>
			</div>
			<br />
			<div>
				<Button success rounded outline>
					<FaGrinHearts />
					success
				</Button>
			</div>
			<br />
			<div>
				<Button warning>
					warning
				</Button>
			</div>
			<br />
			<div>
				<Button danger outline>
					danger
				</Button>
			</div>
		</div>
	);
};

export default App;