import '../../style/headers/HomeHeader.css';
import logo from '../../assets/logo.png';
import AddPostButton from '../buttons/AddPostButton';
import LogoutButton from '../buttons/LogoutButton'


function HomeHeader() {
	return <header className='homeHeader'>
		<AddPostButton />
		<img src={logo} alt="logo Groupomania" className='logoHomeHeader' />
		<LogoutButton />
	</header>
}

export default HomeHeader