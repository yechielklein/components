import { useContext } from 'react';
import NavigationContext from '../context/navigation';

const useNavigation = () => useContext(NavigationContext)

export default useNavigation;