const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require ('../models/user')

//Fonction Validation email
function validateEmail(email) {
    let emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    let valid = emailReg.test(email);

    if(!valid) {
        return false;
    } else {
        return true;
    }
  }

//Fonction permettant la création d'un compte utilisateur
exports.signup = (req, res, next) => {
    if (validateEmail(req.body.email)) {
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash,
                roleAdmin: false,
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Nouvel utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
    } else {
        console.log(error)
    }
    
};

//Fonction permettant à un utilisateur de s'identifier
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Paire adresse email/mot de passe incorrecte' });
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if (!valid) {
                            return res.status(401).json({ error: 'Paire adresse email/mot de passe incorrecte' });
                        } else {
                            res.status(200).json({
                                userId: user._id,
                                admin: user.roleAdmin,
                                token: jwt.sign(
                                    { userId: user._id },
                                    'N734H_IZEFZFBUI43_23EDSQD',
                                    { expiresIn: '24h' }
                                )
                            });
                        }
                    })
                    .catch(error => res.status(500).json({ error }));
            }
        })
        .catch(error => res.status(500).json({ error }));
};