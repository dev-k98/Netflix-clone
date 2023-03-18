import { home, library, search, spotify } from '../../assets/imageExport';
import './sidebar.css';
// 
const index = () => {
	return (
		<div className='sidebar-main'>
			<div className='logo-container'>
				<img className='logo' src={spotify} alt='logo' />
				<span className='logo-name'>Spotify</span>
			</div>
			<div className='sidebar-options'>
				<div className='option'>
					<img className='option-logo' src={home} alt='option-logo' />
					<span className='option-text'>Home</span>
				</div>
				<div className='option'>
					<img className='option-logo' src={search} alt='option-logo' />
					<span className='option-text'>Search</span>
				</div>
				<div className='option'>
					<img className='option-logo' src={library} alt='option-logo' />
					<span className='option-text'>Libraries</span>
				</div>
			</div>
		</div>
	);
};

export default index;
