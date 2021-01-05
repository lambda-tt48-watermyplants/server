const express = require('express');
const server = express();

const userRouter = require('../api/users/user-router');
const plantsRouter = require('../api/plants/plant_router');

server.use(express.json());
server.use('/api/users', userRouter);
server.use('/api/plants', plantsRouter);

server.get('/', (req, res) => {
    res.json({message: "Water My Plants"});
});

module.exports = server;