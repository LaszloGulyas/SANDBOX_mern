const {MongoClient} = require('mongodb');
const dbConfig = require('../config/mongo.params');

const client = new MongoClient(dbConfig.uri);

async function findFirstDocument(collectionName) {
    let document;
    try {
        await client.connect();
        const collection = client.db(dbConfig.database).collection(collectionName);
        document = await collection.findOne();
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await client.close();
    }
    return document;
}

module.exports = {
    findFirstDocument
};
