const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.send('/ being hit');
})
route.get('/exam', (req, res) => {
    res.send('exam being hit');
})

module.exports = route;