const express = require('express');

const router = express.Router();

// a router can have middleware that only applies to the router. 
router.use(express.json());

// this router handles urls that begin with /products
router.get('/', (req, res) => {
    res.send('get to /supplier/')
});

router.get('/name', (req, res) => {
    const { name } = req.params
    res.send(`get to /supplier/${name}`)
});

module.exports = router;