const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');
const secretKey = 'your_secret_key';

module.exports = {
    async login(req, res) {
        try {
            const { login, senha } = req.body;
            const user = await Usuario.findOne({ login });

            if (!user) {
                return res.status(404).json({ error: 'Usuario não encontrado' });
            }

            const isMatch = await bcrypt.compare(senha, user.senha);
            if (!isMatch) {
                return res.status(401).json({ error: 'Senha incorreta' });
            }

            const token = generateToken(user);
            res.status(200).json({ token });
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Erro ao fazer login' });
        }
    }
};

function generateToken(user) {
    const payload = {
        id: user._id,
        nome: user.nome,
        tipo: user.tipo
    };

    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}
