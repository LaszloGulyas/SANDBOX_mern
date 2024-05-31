// Import required modules
const express = require('express');
const cors = require('cors');
const envvars = require('./config/dotenv.config');

// Create an instance of Express
const app = express();
const port = process.env.SERVER_PORT;

// Express configurations
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS middleware

// Import routes
const cardRoutes = require('./api/card/card.routes');
const healthRoutes = require('./api/health/health.routes');

app.use("/api/card", cardRoutes);
app.use("/api/health", healthRoutes);

// Start the server
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received.');
    server.closeAllConnections();
    server.close(() => {
        console.log('Express server closed');
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT signal received.');
    server.closeAllConnections();
    server.close(() => {
        console.log('Express server closed');
    });
});
