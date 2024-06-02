const mongoose = require('mongoose');
const dbConfig = require('../config/mongo.params');

async function findFirstDocument(mongooseModel) {
    let resultDocs;
    try {
        await mongoose.connect(dbConfig.uri);
        resultDocs = await mongooseModel.find();
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
    }
    console.log(resultDocs[0]);
    return resultDocs[0];
}

module.exports = {
    findFirstDocument
}
