const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');

exports.listarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
};

exports.criarUsuario = async (req, res) => {
    try {
        const { nome, senha, login, tipo } = req.body;
        
        if (!nome || !senha || !login) {
            return res.status(400).json({ error: 'Nome, senha e login são obrigatórios.' });
        }

        let tipoUsuario = tipo || "user";
        
        if (req.user && req.user.tipo === 'admin') {
            if (!tipo) {
                return res.status(400).json({ error: 'O campo tipo é obrigatório para administradores.' });
            }
            tipoUsuario = tipo;
        }

        const hashedPassword = await bcrypt.hash(senha, 10);

        const usuario = new Usuario({
            nome,
            senha: hashedPassword,
            login,
            tipo: tipoUsuario
        });
        await usuario.save();
        res.status(201).json(usuario);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};


exports.deletarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(204).send(); // No Content
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
};


exports.atualizarUsuario = async (req, res) => {
    try {
        if (req.user.id !== req.params.id) {
            return res.status(403).json({ error: 'Acesso negado. Você só pode atualizar seu próprio usuário.' });
        }

        const { nome, senha, login, tipo } = req.body;
        const hashedPassword = await bcrypt.hash(senha, 10);

        const usuario = await Usuario.findByIdAndUpdate(req.params.id, {
            nome,
            senha: hashedPassword,
            login,
            tipo
        }, { new: true });

        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.status(200).json(usuario);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
};

