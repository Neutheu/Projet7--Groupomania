import '../../style/buttons/HeaderButton.css';
import {Link} from 'react-router-dom';

function SignUpButton () {
    return <Link to="/SignUp">
         <button className='headerButton' type="button" >
            S'inscrire
        </button>
    </Link>
   
}

export default SignUpButton