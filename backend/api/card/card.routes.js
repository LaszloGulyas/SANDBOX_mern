const express = require('express');
const {getCard} = require("./card.controller");

const router = express.Router();

router.get('/', getCard);

module.exports = router;
