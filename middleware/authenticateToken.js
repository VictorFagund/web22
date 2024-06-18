const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' }); // Não autorizado
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token inválido.' }); // Proibido
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
