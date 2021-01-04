const express = require('express');
const router = express.Router();

const Users = require('./user-model');

router.get('/', async(req, res) => {
    try {
        const data = await Users.find();
        res.json(data);
    } catch {
        res.json({message: 'error for now'});
    }
});

module.exports = router;