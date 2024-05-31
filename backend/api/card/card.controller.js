const cardService = require('./card.service');

async function getCard(req, res) {
    console.log('Process request: GET /card');
    try {
        const card = await cardService.getCard();
        res.send(card);
    } catch (err) {
        console.error(err)
        res.status(500).send({err: 'Unknown server error'});
    }
}

module.exports = {
    getCard
}
