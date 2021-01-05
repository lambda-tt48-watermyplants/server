const express = require('express');
const router = express.Router();

const Plants = require('./plant_model');

router.get('/', async (req, res) => {
    try {
        const data = await Plants.find();
        res.json(data);
    } catch(err){
        res.json({message: err.message});
    }
});

module.exports = router;