// installation de Express avec la commande require

const express = require ('express');

app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });

// la const app appelera la fonction pour créer l'application express
const app = express();

module.exports = app;