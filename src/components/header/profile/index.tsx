import { useEffect, useState } from 'react';
import { avatar, dropdownArrow } from '../../../assets/imageExport';

import './profile.css';

type propTypes = {
	logout: () => void;
};

const Profile = ({ logout }: propTypes) => {
	const [user, setUser] = useState<any>();
	const [dropdown, setDropdown] = useState<boolean>(false);

	const fetchData = async (token: string) => {
		const getMeURL = 'https://api.spotify.com/v1/me';
		await fetch(getMeURL, {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((response) => response.json())
			.then((data) => setUser(data))
			.catch(logout);
	};
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			fetchData(token);
		}
	}, []);

	const toggleDropdown = () => {
		setDropdown(!dropdown);
	};

	return (
		<>
			<button className='btn'>Premium Plans</button>
			{/* <div className='btn bg-dark' onClick={logout}><img src={avatar} alt='avatar' className='avatar'></img>{user && user?.display_name}</div> */}
			<div className='btn bg-dark'>
				<img src={avatar} alt='avatar' className='avatar'></img>
				{user && user?.display_name}
				<img className='profile-dropdown-arrow' src={dropdownArrow} alt='dropdown' onClick={toggleDropdown} />
				{dropdown && (
					<div className='profile-dropdown'>
						<button className='profile-options' onClick={logout}>log out</button>
					</div>
				)}
			</div>
		</>
	);
};

export default Profile;
