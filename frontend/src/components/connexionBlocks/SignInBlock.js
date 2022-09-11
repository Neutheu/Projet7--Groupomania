import SignInButton from '../buttons/SignInButton';
import SignInEmailForm from '../connexionForms/SignInEmailForm';
import SignInPasswordForm from '../connexionForms/SignInPasswordForm';
import '../../style/ConnexionBlock.css'

function SignInBlock () {
    return <div className='connexionBlock'>
        <h1 className='blockTitle'>S'inscrire</h1>
        <SignInEmailForm />
        <SignInPasswordForm />
        <SignInButton />
    </div>
}

export default SignInBlock
