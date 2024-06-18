const express = require('express');
const atividadeController = require('../controllers/atividadeController');
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/atividadeList',authenticateToken, atividadeController.listarAtividades);
router.post('/atividadeCreate',authenticateToken, atividadeController.criarAtividade);
router.delete('/atividadeDelete/:id',authenticateToken, atividadeController.deletarAtividade);
router.put('/atividadeUpdate/:id',authenticateToken, atividadeController.atualizarAtividade);

module.exports = router;
