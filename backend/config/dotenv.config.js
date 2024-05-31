const dotenv = require('dotenv');

const environment = process.env.NODE_ENV || 'local'; // local is default env

dotenv.config({
    path: `.env.${environment}`
});
