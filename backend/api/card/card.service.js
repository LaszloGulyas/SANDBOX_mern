const mongooseService = require('../../services/mongoose.service');
const cardModel = require('./card.model');

async function getCard() {
    const foundCard = await mongooseService.findFirstDocument(cardModel.mongooseModel);
    console.log('Result', foundCard);
    return foundCard;
}

module.exports = {
    getCard
};
