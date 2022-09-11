import '../../style/homePost/PostContent.css';
import test from '../../assets/test.jpg'

function PostContent () {
    return <div className='postContent'>
        <div className='imageContainer'>
            <img src={test} alt = 'post' className='imageContent'/>
        </div>
        <div className='texteContent'>
            Si vous regardez votre  package.json  , vous verrez qu'ESLint fait déjà partie des outils préconfigurés par Create React App. Cet outil permet de vous signaler des erreurs de code – si vous utilisez une variable qui n'a jamais été déclarée, par exemple.
            Si vous regardez votre  package.json  , vous verrez qu'ESLint fait déjà partie des outils préconfigurés par Create React App. Cet outil permet de vous signaler des erreurs de code – si vous utilisez une variable qui n'a jamais été déclarée, par exemple.
        </div>
    </div>
}

export default PostContent