const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/authenticateToken');
const checkAdmin = require('../middleware/checkAdmin');

const router = express.Router();

router.post('/login', authController.login);

router.get('/usuario', authenticateToken, usuarioController.listarUsuarios);
router.post('/usuario', usuarioController.criarUsuario);
router.delete('/usuario/:id', authenticateToken, checkAdmin, usuarioController.deletarUsuario);
router.put('/usuario/:id', authenticateToken, usuarioController.atualizarUsuario);

module.exports = router;
