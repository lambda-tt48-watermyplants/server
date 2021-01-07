const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const jwt = require('jsonwebtoken');

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
server.use('/api/plants', isAuthenticated, plantsRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.json({ message: "Water My Plants" });
});

//Checks if user is logged to be able to access certain routes
function isAuthenticated(req, res, next) {
    const token = req.headers.authorization;
    const secret = process.env.JWT_SECRET || 'foo';
    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err){
                res.status(401).json({ message: 'you do not have access' });
            } else {
                req.jwt = decodedToken;
                next();
            }
        })
    } else {
        res.status(401).json({ message: 'You do not have a token' });
    }
}

module.exports = server;