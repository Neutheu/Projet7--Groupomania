import '../style/headers/HomeAndCreatePostHeader.css';
import logo from '../assets/logo.png';
import AddPostButton from './buttons/AddPostButton';
import HomeButton from './buttons/HomeButton';
import LogoutButton from './buttons/LogoutButton';
import ConnexionButtons from './buttons/ConnexionButtons';


function Header() {

    let userId = localStorage.getItem('userId');

	return <header className='homeAndCreatePostHeader'>
		<div className='leftButtons'>
            <HomeButton />
            <AddPostButton />   
        </div>
		<img src={logo} alt="logo Groupomania" className='logoHeader' />
        <div className='rightButtons'>
            {userId ? <LogoutButton /> : <ConnexionButtons />}
        </div>
	</header>
}

export default Header