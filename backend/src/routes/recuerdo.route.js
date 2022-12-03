const express = require ('express');
const router = express.Router();

const recuerdoCtrl = require('../controllers/recuerdos.controller')

router.get ('/', recuerdoCtrl.getRecuerdos);
router.post('/', recuerdoCtrl.createRecuerdo);
router.get('/:id', recuerdoCtrl.getRecuerdo);
router.put('/:id', recuerdoCtrl.editRecuerdo);
router.delete('/:id', recuerdoCtrl.deleteRecuerdo);

module.exports = router;