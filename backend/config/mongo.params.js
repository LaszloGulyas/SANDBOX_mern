const username = process.env.DATABASE_MONGODB_USERNAME;
const password = process.env.DATABASE_MONGODB_PASSWORD;
const host = process.env.DATABASE_MONGODB_HOST;
const port = process.env.DATABASE_MONGODB_PORT;
const database = process.env.DATABASE_MONGODB_DBNAME;

const uri = `mongodb://${username}:${password}@${host}:${port}/${database}`;

module.exports = {
    database,
    uri
};
