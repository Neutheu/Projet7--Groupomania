import '../../style/headers/AddPostHeader.css';
import logo from '../../assets/logo.png';
import HomeButton from '../buttons/HomeButton';
import LogoutButton from '../buttons/LogoutButton'


function AddPostHeader() {
	return <header className='addPostHeader'>
		<HomeButton />
		<img src={logo} alt="logo Groupomania" className='logoAddPostHeader' />
		<LogoutButton />
	</header>
}

export default AddPostHeader