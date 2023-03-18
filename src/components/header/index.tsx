import { useCallback, useEffect, useState } from 'react';
import './header.css';

import {
	AUTH_ENDPOINT,
	CLIENT_ID,
	REDIRECT_URI,
	RESPONSE_TYPE,
} from '../../constants/spotify.creds';
import Profile from './profile';
import { arrow } from '../../assets/imageExport';
import NotLogged from './noUser.tsx';

const initialTokenState: string = '';

const Header = () => {
	const [token, setToken] = useState(initialTokenState);

	useEffect(() => {
		const hash = window.location.hash;
		let token = localStorage.getItem('token');

		if (!token && hash) {
			token = hash
				.substring(1)
				.split('&')
				.find((elem) => elem.startsWith('access_token'))
				.split('=')[1];

			window.location.hash = '';
			localStorage.setItem('token', token);
		}

		setToken(token);
	}, []);

	const logout = useCallback(() => {
		setToken('');
		localStorage.removeItem('token');
	}, []);

	const login = useCallback(() => {
		const loginURL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
		window.location.href = loginURL;
	}, []);

	return (
		<div className='header-main'>
			{token ? (
				// <button onClick={logout}>Log Out</button>
				<div className='header-logged-in'>
					<div className='navigation-box'>
						<button className='arrow arrow-back'>
							<img className='arrow-icon' src={arrow} alt='back' />
						</button>
						<button className='arrow arrow-forward'>
							<img className='arrow-icon' src={arrow} alt='back' />
						</button>
					</div>
					<div className='profile-container'>
						<Profile logout={logout} />
					</div>
				</div>
			) : (
				<div className='header-logged-out'>
					<NotLogged login={login}/>
				</div>
			)}
		</div>
	);
};

export default Header;
