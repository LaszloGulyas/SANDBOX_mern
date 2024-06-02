const mongoose = require('mongoose');

const collectionName = 'cards';

const cardSchema = new mongoose.Schema({
    title: {type: String, required: true},
    cost: {type: Number, required: true}
});

const mongooseModel = mongoose.model('CardModel', cardSchema, collectionName);

module.exports = {
    collectionName,
    mongooseModel
};
