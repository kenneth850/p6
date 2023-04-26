// Importation d'express pour la création du router

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');


// Creation de route post

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);


// Exportation du router (et importation de celui-ci dans App.js)
module.exports = router;