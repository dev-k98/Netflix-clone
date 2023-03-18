import './noUser.css';

type propType = {
	login: () => void;
};

const NotLogged = ({ login }: propType) => {
	return (
		<>
			<div className='btn-noUser'>Login</div>
			<div className='btn-noUser' onClick={login}>Login</div>
		</>
	);
};

export default NotLogged;
