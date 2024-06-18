const mongoose = require('mongoose');

const AtividadeSchema = new mongoose.Schema({
    nome: String,
    status: String,
    responsavel: String,
    artefatos: [String],
    dataCriacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Atividade', AtividadeSchema);
