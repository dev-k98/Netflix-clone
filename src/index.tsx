import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Search from './components/sidebar/search';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route path='callback' element={<App />} />
			<Route path='search' element={<Search />} />
		</Route>
	)
);

const root = createRoot(document.getElementById('root')!);

root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

reportWebVitals();
