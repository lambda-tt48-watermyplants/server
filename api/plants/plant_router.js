const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('These are the plants');
})

module.exports = router;