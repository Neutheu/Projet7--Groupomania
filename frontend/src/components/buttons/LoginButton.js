import '../../style/buttons/HeaderButton.css';
import {Link} from 'react-router-dom';

function LoginButton () {
    return <Link to="/Login">
         <button className='headerButton' type="button" >
            Se connecter
        </button>
    </Link>
   
}

export default LoginButton