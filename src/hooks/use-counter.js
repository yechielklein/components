import { useEffect, useState } from 'react';

const useCounter = (initialCount) => {
	const [count, setCount] = useState(initialCount || 0);

	useEffect(() => {
		console.log(count);
	}, [count]);

	const increment = () => {
		setCount(currentCount => currentCount + 1);
	};

	return {
		count,
		increment
	};
};

export default useCounter;