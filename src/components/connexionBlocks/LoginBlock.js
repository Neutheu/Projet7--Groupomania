import LoginButton from '../buttons/LoginButton';
import LoginEmailForm from '../connexionForms/LoginEmailForm';
import LoginPasswordForm from '../connexionForms/LoginPasswordForm';
import '../../style/ConnexionBlock.css'

function LoginBlock () {
    return <div className='connexionBlock'>
        <h1 className='blockTitle loginBlockTitle'>Se connecter</h1>
        <LoginEmailForm />
        <LoginPasswordForm />
        <LoginButton />
    </div>
}

export default LoginBlock
