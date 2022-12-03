const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.post('/registro',async (req, res) => {
    const { nombre, email, password} = req.body;
    const newUser = new User ({nombre, email, password});
    await newUser.save();
    const token = jwt.sign({_id: newUser._id },'secretKey');
    res.status(200).json({token});
});

router.post('/login', async (req, res) => {
    const { nombre, email, password} = req.body;
    const user = await User.findOne({email: email});

    if (!user) return res.status(401).send("El Correo no existe");
    

    if (user.password !== password) return res.status(500).send("Contraseña Incorrecta");
    

    const token = jwt.sign({_id: user._id},'secretKey');
    return res.status(200).json({token,rol:user.rol});
});

router.get('/perfil',verificarToken), (req,res) =>{
    res.send(req.userId);
}

router.get('/usuarios'), async (req,res) => {
    const usuarios = await User.find();
    res.json(usuarios);
}

function verificarToken (req, res, next) {
    if (!req.headers.authorization){
        return res.status(401).send('Acceso Denegado');
    }
    const token = req.headers.authorization.split(' ')[1]

    if (token == 'null'){
        return res.status(401).send('Acceso Denegado');
    }

    const payload = jwt.verify(token,'secretKey');
    req.userId = payload._id;
    next();
}

module.exports = router;
