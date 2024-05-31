const {MongoClient} = require('mongodb');

const username = process.env.DATABASE_MONGODB_USERNAME;
const password = process.env.DATABASE_MONGODB_PASSWORD;
const host = process.env.DATABASE_MONGODB_HOST;
const port = process.env.DATABASE_MONGODB_PORT;
const database = process.env.DATABASE_MONGODB_DBNAME;

const uri = `mongodb://${username}:${password}@${host}:${port}/${database}`;
const client = new MongoClient(uri);

async function findFirstDocument(collectionName) {
    let document;
    try {
        await client.connect();
        const collection = client.db(database).collection(collectionName);
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
