import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";

function ConnexionButtons () {
    return <div style={{
        display:'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }}>
        <LoginButton />
        <SignUpButton />
    </div>
}

export default ConnexionButtons