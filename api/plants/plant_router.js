const express = require('express');
const router = express.Router();

const Plants = require('./plant_model');

router.get('/', async (req, res) => {
    try {
        const data = await Plants.find();
        res.json(data);
    } catch (err) {
        res.json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const data = await Plants.insert(req.body);
        res.json(data);
    } catch (err) {
        res.json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Plants.findBy({ id });
        res.json(data);
    } catch (err) {
        res.json({ message: err.message });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const body = req.body;
        const { id } = req.params;
        const data = await Plants.update(id, body);
        res.json(data);
    } catch (err) {
        res.json({ message: err.message });
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const data = await Plants.remove(id);
        res.json(data);
    } catch(err){
        res.json({message: err.message})
    }
})

module.exports = router;