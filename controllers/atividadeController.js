const Atividade = require('../models/atividade');

exports.listarAtividades = async (req, res) => {
    const atividades = await Atividade.find();
    res.send(atividades);
};

exports.criarAtividade = async (req, res) => {
    const atividade = new Atividade({
        nome: req.body.nome,
        status: req.body.status,
        responsavel: req.body.responsavel,
        artefatos: req.body.artefatos
    });
    await atividade.save();
    res.send(atividade);
};

exports.deletarAtividade = async (req, res) => {
    const atividade = await Atividade.findByIdAndDelete(req.params.id);
    res.send(atividade);
};

exports.atualizarAtividade = async (req, res) => {
    const atividade = await Atividade.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        status: req.body.status,
        responsavel: req.body.responsavel,
        artefatos: req.body.artefatos
    }, { new: true });
    res.send(atividade);
};
