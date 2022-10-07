import React from "react";
import '../../style/homePost/PostHeader.css';
import '../../style/homePost/PostContent.css';
import '../../style/homePost/HomePostFooter.css';
import '../../style/homePost/FooterButtons.css';
import '../../style/homePost/HomePost.css';
import '../../style/buttons/SectionButton.css';
import '../../style/homePost/FooterButtons.css';
import '../../style/buttons/LikeButton.css';
import {useNavigate} from 'react-router-dom';



 function Card ( {post} ) {

    const naviguate = useNavigate();
    let postId = post._id
    let guillemetsUserId = localStorage.getItem("userId");
    let userId = guillemetsUserId.replace(/['"]+/g, '');
    let stockedToken = localStorage.getItem("token");

    function modifyPost () {

        if (userId.replace(/['"]+/g, '') == post.userId || userId == '634025f9f90aa77f3bb294da') {

            let modifyPost = {
                modifyPostText: post.postText,
                modifyUserId: post.userId,
                modifyUsersLiked: post.usersLiked,
                modifyDate: post.date,
                modifyId: post._id,
            }; 

            let stockedModifyPost = JSON.stringify(modifyPost);  
            localStorage.setItem("modifyPost",stockedModifyPost);  

            naviguate("/ModifyPostPage")
        
        } else {

            alert("Vous n'êtes pas autorisé à modifier ce post")

        }
       
    }
    
    function deletePost () {

        fetch('http://localhost:4200/api/posts/id', {
            method: 'DELETE',
            headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + ' ' + JSON.stringify(JSON.parse(stockedToken)), 
            },
            body: JSON.stringify ({'postId':postId, 'userId':userId })
            })
            .then((response) => { 
                if (response.ok) {
                    window.location.reload();
                    alert("Post supprimé")
                } else {
                    alert("Erreur : Non autorisé")
                } 
            })
            .catch ((error) => console.log(error))
    }

    function likePost () {

        fetch('http://localhost:4200/api/posts/like', {
            method: 'POST',
            headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + ' ' + JSON.stringify(JSON.parse(stockedToken)), 
            },
            body: JSON.stringify ({'postId':postId, 'userId':userId })
            })
            .then((response) => { 
                if (response.status === 401) {
                    alert('post déjà liké')
                } else {
                    window.location.reload();
                } 
            })
            .catch ((error) => console.log(error))
    }

    return (
    <div className='homePost'>
        <div className='postHeader'>
            <div className='headerInfos'>
            Le {post.date}
            </div>
        </div>
        <div className='postContent'>
            <div className='imageContainer'>
                <img src={post.imageUrl} alt = 'post Image' className='imageContent'/>
            </div>
            <div className='texteContent'>
            {post.postText}
            </div>
        </div>
        <div className="homePostFooter">
            <div className="footerButtons">
                <button className='sectionButton' type='button' onClick={modifyPost}>
                     Modifier
                </button> 
                <button className='sectionButton' type='button' onClick={deletePost}>
                    Supprimer
                </button> 
            </div>
            <div className='likeButton'>
                <i class="fa-solid fa-thumbs-up likeButtonIcone" onClick={likePost}></i>
                <div>{post.likes}</div>
            </div>
        </div>
    </div>      
    )
 }

 export default Card