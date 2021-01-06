const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../users/user-model');
const router = express.Router();

const checkPayload = (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        res.status(401).json('bad payload');
    } else {
        next();
    }
}

const checkUsernameUnique = async (req, res, next) => {
    // username must not be in the db already
    try {
        const rows = await User.findBy({ username: req.body.username });
        if (!rows.length) {
            next();
        } else {
            res.status(401).json('username taken');
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const checkUsernameExists = async (req, res, next) => {
    try {
        const rows = await User.findBy({ username: req.body.username });
        console.log(rows);
        if (rows.length) {
            req.userData = rows[0];
            next();
        } else {
            res.status(401).json('who is this exactly?')
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

router.post('/register', checkPayload, checkUsernameUnique, async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10);
        const newUser = await User.insert({ username: req.body.username, password: hash, phone_number: req.body.phone_number });
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/login', checkPayload, checkUsernameExists, (req, res) => {
    try {
        console.log('logging in');
        const verifies = bcrypt.compareSync(req.body.password, req.userData.password);
        if (verifies) {
            req.session.user = req.userData
            res.json(`Welcome back, ${req.userData.username}`)
        } else {
            res.status(401).json('bad credentials')
        }
    } catch (err) {
        res.status(500).json('something failed')
    }
})

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => { 
            if (err) {
                res.json('you have not been logged out properly');
            } else res.json('GoodBye');
        })
    } else {
        res.json('there was no session');
    }
})

module.exports = router;