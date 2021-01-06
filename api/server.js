const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const KnexSessionStore = require('connect-session-knex')(session);

const userRouter = require('../api/users/user-router');
const plantsRouter = require('../api/plants/plant_router');
const authRouter = require('../api/auth/auth-router');


const server = express();

const config = {
    name: 'sessionId',
    secret: 'keep it secret',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
    
    store: new KnexSessionStore({
        knex: require('../data/dbConfig'), 
        tablename: 'session',
        sidfieldname: "sid",
        createtable: true,
        clearInterval: 1000 * 60 * 60,
    }),
}

server.use(session(config));
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api/users', userRouter);
server.use('/api/plants', plantsRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.json({message: "Water My Plants"});
});

module.exports = server;