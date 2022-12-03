const Usuario = require('../models/User');
const userCtrl = {};

userCtrl.getUsers = async (req, res) => { 
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

module.exports = userCtrl;