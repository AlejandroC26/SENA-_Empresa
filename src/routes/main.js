const express = require("express");
const main = express.Router();

main.get('/', (req, res) => {
    res.render('index');
});
main.get('/store', (req, res) => {
    res.render('store');
});
main.get('/buy', (req, res) => {
    res.render('buy');
});
main.get('/uds', (req, res) => {
    res.render('uds');
});
main.get('/ud', (req, res) => {
    res.render('ud');
});

module.exports = main;