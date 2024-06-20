const express = require('express');
const atividadeController = require('../controllers/atividadeController');
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();
router.get('/atividade',authenticateToken, atividadeController.listarAtividades);
router.post('/atividade',authenticateToken, atividadeController.criarAtividade);
router.delete('/atividade/:id',authenticateToken, atividadeController.deletarAtividade);
router.put('/atividade/:id',authenticateToken, atividadeController.atualizarAtividade);

module.exports = router;
