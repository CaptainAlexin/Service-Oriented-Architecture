const Recuerdo = require('../models/Recuerdo');
const recuerdoCtrl = {};

recuerdoCtrl.getRecuerdos = async (req, res) => { 
    const recuerdos = await Recuerdo.find();
    res.json(recuerdos);
}

recuerdoCtrl.getRecuerdo = async (req, res) => {
    const recuerdo = await Recuerdo.findById(req.params.id);
    res.json(recuerdo);
}

recuerdoCtrl.createRecuerdo = async (req, res) => {
    console.log('Body recibido en la petición',req.body)
    const nuevoRecuerdo = new Recuerdo ({
        tituloRecu: req.body.tituloRecu,
        descRecu: req.body.descRecu,
        imgRecu: req.body.imgRecu
    });
    await nuevoRecuerdo.save();
    res.json({
        'status': 'Recuerdo guardado'
    })
}

recuerdoCtrl.editRecuerdo = async (req, res) => {
    const { id } = req.params;
    const recuerdo = {
        tituloRecu: req.body.tituloRecu,
        descRecu: req.body.descRecu,
        imgRecu: req.body.imgRecu
    }
    await Recuerdo.findByIdAndUpdate(id, {$set:recuerdo},{new:true})
    res.json({status: 'Recuerdo Actualizado'})
}

recuerdoCtrl.deleteRecuerdo = async (req, res) => {
    await Recuerdo.findByIdAndRemove(req.params.id)
    res.json({status: 'Recuerdo eliminado'})
}

module.exports = recuerdoCtrl;