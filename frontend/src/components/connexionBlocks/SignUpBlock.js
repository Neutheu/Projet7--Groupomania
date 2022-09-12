import '../../style/ConnexionBlock.css';
import '../../style/buttons/SectionButton.css';
import '../../style/ConnexionForms.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';



function SignUpBlock () {

    const naviguate = useNavigate()

    function postRequest () {
        fetch("http://localhost:4200/api/auth/signup", {
            method: 'POST',
            headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' 
            },
            body: JSON.stringify ({password, email} )
            })
            .then((response) => { 
                if (response.ok) {
                    naviguate("/HomePage")
                }  
            })
            .catch ((error) => console.log(error))
    } 

    let [email, setInputEmailValue] = useState("")

    let [password, setInputPasswordValue] = useState("")
    
    return <div className='connexionBlock'>
        <h1 className='blockTitle'>S'inscrire</h1>
        <div className='connexionForm'>
            <p className='connexionText'>Email  :</p>
            <input className='connexionInput' onChange={(event) => setInputEmailValue(event.target.value)}/>
        </div>
        <div className='connexionForm'>
            <p className='connexionText'>Mot de passe  :</p>
            <input type='password' className='connexionInput' onChange={(event) => setInputPasswordValue(event.target.value)}/>
        </div>
        <button className='sectionButton' type='button' onClick={postRequest}>
            S'inscrire
        </button>
    </div>
}

export default SignUpBlock
