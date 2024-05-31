async function getHealth(req, res) {
    console.log('Process request: GET /health');
    try {
        res.send('Service is UP and RUNNING!');
    } catch (err) {
        console.error(err)
        res.status(500).send({err: 'Service is unhealthy!'});
    }
}

module.exports = {
    getHealth
}
