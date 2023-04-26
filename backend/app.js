// installation de Express avec la commande require

const express = require ('express');
const mongoose = require('mongoose');


// la const app appelera la fonction pour créer l'application express
const app = express();

mongoose.connect('mongodb+srv://kenneth_vandenbilcke_1210:Edenhazard_1017@clusterp6.un7vfkj.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// Récupération du tableau via l'API
app.use('/api/sauces', (req, res, next) => {

  const sauces = [
    {
      userId: '',
      name: "Nom de la sauce",
      manufacturer: "Fabricant de la sauce",
      description: "Les informations de la sauce",
      mainPepper: "L'ingrédient principal de la sauce",
      imageUrl: "URL image",
      heat: "Nombre entre 1 et 10 décrivant la sauce",
      likes: "Nombre utilisateurs qui aiment la sauce",
      dislikes: "Nombre d'utilisateurs qui n'aiment pas la sauce",
      usersLikes: "Tableau des identifiants des utilisateurs qui ont aimé la sauce",
      usersDisliked: "Tableau des identifiants des utilisateurs qui n'ont pas aimé la sauce"
    },
  ];

  // Envoi d'une réponse réussi 200
  res.status(200).json(sauces);
});

module.exports = app;

