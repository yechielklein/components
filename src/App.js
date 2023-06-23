import Button from './Button';

const App = () => {
	return (
		<div>
			<br />
			<div>
				<Button>plain</Button>
			</div>
			<br />
			<div>
				<Button primary rounded>primary</Button>
			</div>
			<br />
			<div>
				<Button secondary outline>secondary</Button>
			</div>
			<br />
			<div>
				<Button success rounded outline>success</Button>
			</div>
			<br />
			<div>
				<Button warning>warning</Button>
			</div>
			<br />
			<div>
				<Button danger outline>danger</Button>
			</div>
		</div>
	);
};

export default App;