const express = require("express");
const admin = express.Router();

admin.get('/', (req, res) => {
    res.render('admin/index');
});
admin.get('/usuarios', (req, res) => {
    res.render('admin/usuarios');
});

module.exports = admin;