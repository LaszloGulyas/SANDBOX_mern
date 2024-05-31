// This init script is used by docker-compose during container startup

// Create user
db = db.getSiblingDB('mern_practice_db');
db.createUser({
    user: "test",
    pwd: "test1234",
    roles: [{role: "readWrite", db: "mern_practice_db"}]
});

// Add cards table and init record
db = db.getSiblingDB('mern_practice_db');
db.createCollection("cards");
db.getCollection("cards").insertOne({
    "_id": ObjectId("663f504e9388508823166a61"),
    "title": "University",
    "cost": 16000
});
