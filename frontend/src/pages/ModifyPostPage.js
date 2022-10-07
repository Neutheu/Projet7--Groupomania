import Footer from '../components/Footer';
import Header from '../components/Header';
import '../style/buttons/SectionButton.css';
import '../style/CreatePostSection.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


function ModifyPostPage () {

    let stockedModifyPost = localStorage.getItem("modifyPost");
    let modiPost = JSON.parse(stockedModifyPost);

    let stockedToken = localStorage.getItem("token");

    let stockedUserId = localStorage.getItem("userId");
    let userId = JSON.parse(stockedUserId);

    const naviguate = useNavigate();

    function postRequest () {

        if (postText === "") {
            postText = modiPost.modifyPostText
        }

        const formData = new FormData();
        formData.append('post', JSON.stringify({'postId':modiPost.modifyId, 'postText' :postText, 'userId' : userId, 'usersLiked' : modiPost.modifyUsersLiked,'date' : modiPost.modifyDate}));
        formData.append('image',  postImage[0] );

        fetch("http://localhost:4200/api/posts/id", {
            method: 'PUT',
            headers: { 
                'Authorization': 'Bearer' + ' ' + JSON.stringify(JSON.parse(stockedToken)), 
                },
            body: formData
            })
            .then ( (response) => {
                if (response.status===200) {
                    alert ("Votre poste a bien été modifié")
                    naviguate("/");
                    localStorage.removeItem('modifyPost'); 
                    modiPost = "";   
                }
            }
            )
            .catch ((error) => console.log(error))

    } 


   
    let [postText, setInputTextlValue] = useState("");
    let [postImage, setInputImageValue] = useState("");

    return <div>
        <Header />
        <section className='createPostSection'>
            <div className='inputCreatePost'>
                <h1 className='titleInput'>Texte :</h1>
                <textarea className='input'onChange={(event) => setInputTextlValue(event.target.value)}>{modiPost.modifyPostText}</textarea>
            </div>
            <div className='imgPost'>
                <label className='addImage' htmlFor="avatar">Ajouter une image :</label>
                <input type="file"
                    id="avatar" name="avatar"
                    accept="image/png, image/jpeg, image/jpg" onChange={(event) => setInputImageValue(event.target.files)}/>
                <div className='newImageMessage'>Veuillez insérer une image si vous souhaitez modifier l'image initiale.</div>
            </div>
            <button className='sectionButton publishButton' type='button' onClick={postRequest}>
                Modifier
            </button>
        </section>
        <Footer />
    </div>
}

export default ModifyPostPage