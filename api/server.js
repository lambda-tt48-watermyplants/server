const express = require('express');
const server = express();
const userRouter = require('../api/users/user-router');

server.use(express.json());
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
    res.json({message: "Water My Plants"});
});

module.exports = server;