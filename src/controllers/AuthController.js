const express = require('express');
const auth = express();

auth.get('/auth', (req, res) => {
    res.send('autenticar');
}) 

module.exports = auth;