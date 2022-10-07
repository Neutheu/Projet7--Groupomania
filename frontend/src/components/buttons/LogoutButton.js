import '../../style/buttons/HeaderButton.css';

function LogoutButton () {

    function logout () {
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        window.location.reload();
    }

    return <button className='headerButton' type="button" onClick={logout} >
        Se déconnecter
    </button>
}

export default LogoutButton