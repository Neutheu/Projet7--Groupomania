const Post = require('../models/post');
const User = require ('../models/user')
const fs = require('fs');

// Fonction permetttant d'afficher tous les posts
exports.displayAllPosts = (req, res, next) => {
    Post.find()
    .then(
      (posts) => {
        res.status(200).json(posts);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };


//Fonction permettant de créer et d'enregistrer un post dans la base de données
exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.body.post);
  delete postObject._id;
  delete postObject._userId;
  const post = new Post({
      ...postObject,
      userId: req.auth.userId,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
      likes: 0, 
  });

  post.save()
  .then(() => { res.status(201).json({message: 'Post enregistré'})})
  .catch(error => { res.status(400).json( { error })})
};

//Fonction permettant de modifier un post déjà publié
exports.modifyPost = (req, res, next) => {
  const postObject = req.file ? {
    ...JSON.parse(req.body.post),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } : { ...JSON.parse(req.body.post) };

   
  delete postObject._userId;

  let admin;

  User.findOne({_id: postObject.userId})
    .then((user) => {
      admin = user.roleAdmin
    })
    .catch(error => res.status(401).json({ error }));
   
  Post.findOne({_id: postObject.postId})
    .then((post) => {
      if (admin === true) {
        postObject.userId = post.userId
      }
      if (post.userId == postObject.userId || admin === true) {
        Post.updateOne({ _id: postObject.postId}, { ...postObject, _id: postObject.postId})
        .then(() => res.status(200).json({message : 'Post modifié!'}))
        .catch(error => res.status(401).json({ error }));
      } else {
        res.status(403).json({ message : 'unauthorized request'});
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
  };

// Fonction permettant de supprimer un post
exports.deletePost = (req, res, next) => {

  let admin;

  User.findOne({_id: req.body.userId})
    .then((user) => {
      admin = user.roleAdmin
    })
    .catch(error => res.status(401).json({ error }));
   
  Post.findOne({ _id: req.body.postId})
    .then(post => {
      if (post.userId == req.body.userId || admin === true) {
        const filename = post.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Post.deleteOne({_id: req.body.postId})
          .then(() => { res.status(200).json({message: 'Post supprimé'})})
          .catch(error => res.status(401).json({ error }));
        });
      } else {
        res.status(401).json({message: 'Non autorisé'});
        }
    })
    .catch( error => {
        res.status(500).json({ error });
    });
  };

// Fonction permettant de liker un post
exports.likePost = (req, res, next) => {
  Post.findOne({_id: req.body.postId})
    .then(
      (post) => {
          if (post.usersLiked.includes(req.body.userId)) {
            post.usersLiked.splice(post.usersLiked.indexOf(req.body.userId),1)
            post.likes--;
          } 
          else {
            post.usersLiked.push(req.body.userId);
            post.likes++;
            }
          post.save()
          .then(() => { res.status(201).json({message: 'Post enregistré'})})
          .catch(error => { res.status(400).json( { error })});
          })
              
      .catch(
        (error) => {
          res.status(404).json({
            error: error
          });
        }
      );
};
