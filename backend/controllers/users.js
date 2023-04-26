// Installation et importation du pâckage de cryptage Bcrypt
const bcrypt = require('bcrypt');

// Utilisation de notre modèle users
const users = require('../models/users');

// Mise en place de la fonction signup pour l'enregistrement de nouveaux utilisaters

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 12)
        .then(hash => {
            const user = new user ({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message : "Utilisateur créé !" }))
                .catch(error => res.status(400).json ({ error }));
        })
        .catch(error => res.status(500).json ({ error }));
};

// Mise en place de la fonction login pour connecter des utilisateurs existants

exports.login = (req, res, next) => {
    user.findOne({ email: req.body.email})
        .then(user => {
                if (user === null) {
                    res.status(401).json ({ message : "Paire identifiant/Mot de passe incorrecte"});
                }else {
                    bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if (!valid) {
                            res.status(401).json({ message: "Paire identifiant/Mot de passe incorrecte"})
                        }else {
                            res.status(200).json({
                                userId: user._id,
                                toker: 'TOKEN'
                            })
                        }

                    })
                    .catch(error => {
                        res.status(500).json ({ error });
                    })
                }
        })
        .catch(error => {
            res.status(500).json ({ error });
        })
};