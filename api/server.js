const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.json({message: "Water My Plants"});
});

module.exports = server;