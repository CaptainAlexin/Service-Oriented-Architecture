const express = require ('express');
const router = express.Router();

const not_a = require('../controllers/notas.controller')

router.get ('/', not_a.getNotas);
router.post('/', not_a.createNota);
router.get('/:id', not_a.getNota);
router.put('/:id', not_a.editNota);
router.delete('/:id', not_a.deleteNota);

module.exports = router;
