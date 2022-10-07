import '../../style/buttons/HeaderButton.css';
import {Link} from 'react-router-dom';

function AddPostButton () {

    function connexionAlert () {
        if (!userId) {
            alert('Vous devez vous connecter')
        }
    }

    let userId = localStorage.getItem('userId');

    return <Link to={userId ? "/CreatePostPage" : "/Login"}>
        <button className='headerButton' type="button" onClick={connexionAlert} >
            Ajouter un post
        </button>
    </Link>
}

export default AddPostButton