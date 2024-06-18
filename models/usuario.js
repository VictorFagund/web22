const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({ 
    nome: String, 
    senha: String,
    tipo: String,
    login: String 
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
