const Nota = require ('../models/notas')
const notasCtrl = {};

notasCtrl.getNotas = async (req, res) => { 
    const notas = await Nota.find();
    res.json(notas);
}

notasCtrl.getNota = async (req, res) => {
    const nota = await Nota.findById(req.params.id);
    res.json(nota);
}

notasCtrl.createNota = async (req, res) => {
    console.log('Body recibido en la petición',req.body)
    const nuevaNota = new Nota ({
        titulo: req.body.titulo,
        desc: req.body.desc,
        fecha: req.body.fecha
    });
    await nuevaNota.save();
    res.json({
        'status': 'Nota guardada'
    })
}

notasCtrl.editNota = async (req, res) => {
    const { id } = req.params;
    const nota = {
        titulo: req.body.titulo,
        desc: req.body.desc,
        fecha: req.body.fecha
    }
    await Nota.findByIdAndUpdate(id, {$set:nota},{new:true})
    res.json({status: 'Nota Actualizada'})
}

notasCtrl.deleteNota = async (req, res) => {
    await Nota.findByIdAndRemove(req.params.id)
    res.json({status: 'Nota eliminada'})
}

module.exports = notasCtrl;