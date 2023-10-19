import useNavigation from '../hooks/use-navigation';

const Route = ({ children, path}) => {
	const { currentPath } = useNavigation();

	if (path === currentPath) {
		return children;
	};

	return null;
};

export default Route;