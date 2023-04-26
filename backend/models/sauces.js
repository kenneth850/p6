// Importation de mongoose pour permettre la création du modèle Sauce
const mongoose = require('mongoose');

// Création de mon modèle de donnée Sauce

const saucesSchema = mongoose.Schema({
    userId: {type: String, require: true },
    name: {type: String, require: true },
    manufacturer: {type: String, require: true },
    description: {type: String, require: true },
    mainPepper: {type: String, require: true },
    imageUrl: {type: String, require: true },
    heat: {type: Number, require: true },
    likes: {type: Number, require: true },
    dislikes: {type: Number, require: true },
    usersLikes: {type: String <userId>, require: true },
    usersDisliked: {type: String <userId>, require: true },
});

// Exportation de mon modèle Sauce

module.exports = mongoose.model('sauces', saucesSchema);