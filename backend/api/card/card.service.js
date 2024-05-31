const mongodbService = require('../../services/mongodb.service');

const cardCollectionName = 'cards'

async function getCard() {
    const foundCard = await mongodbService.findFirstDocument(cardCollectionName);
    console.log('Result', foundCard);
    return foundCard;
}

module.exports = {
    getCard
};
