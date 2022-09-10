import '../../style/ConnexionForms.css';

function LoginPasswordForm () {
    return <div className='connexionForm'>
        <p className='connexionText'>Mot de passe  :</p>
        <input type='password' className='connexionInput'/>
    </div>
}

export default LoginPasswordForm