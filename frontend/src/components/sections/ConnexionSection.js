import LoginBlock from "../connexionBlocks/LoginBlock";
import SignInBlock from "../connexionBlocks/SignInBlock";
import '../../style/ConnexionSection.css'

function ConnexionSection () {
    return <section className="connexionSection">
        <LoginBlock />
        <SignInBlock />
    </section>
}

export default ConnexionSection