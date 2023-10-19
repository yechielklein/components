import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { NavigationProvider } from './context/navigation';

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);

root.render(
	<NavigationProvider>
		<App />
	</NavigationProvider>
);