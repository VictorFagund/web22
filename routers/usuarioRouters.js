const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/authenticateToken');
const checkAdmin = require('../middleware/checkAdmin');

const router = express.Router();

router.post('/login', authController.login);

router.get('/usuarioList', authenticateToken, usuarioController.listarUsuarios);
router.post('/usuarioCreate', usuarioController.criarUsuario);
router.delete('/usuarioDelete/:id', authenticateToken, checkAdmin, usuarioController.deletarUsuario);
router.put('/usuarioUpdate/:id', authenticateToken, usuarioController.atualizarUsuario);

module.exports = router;
