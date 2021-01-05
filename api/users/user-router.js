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

router.post('/', async(req, res) => {
    try {
        const data = await  Users.insert(req.body);
        res.json(data);
    } catch(err){
        res.json({message: err.message});
    }
})

module.exports = router;