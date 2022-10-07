import '../../style/buttons/HeaderButton.css';
import {Link} from 'react-router-dom';

function HomeButton () {
    
    let userId = localStorage.getItem('userId');

    function connexionAlert () {
        if (!userId) {
            alert('Vous devez vous connecter')
        }
    }

    return <Link to={userId ? "/" : "/Login"}>
        <button className='headerButton' type="button" onClick={connexionAlert} >
            Voir les posts 
        </button>
    </Link>
}

export default HomeButton
