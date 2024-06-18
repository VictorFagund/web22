const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://gabrielahensel:LHh6EsDJzItqy0d6@apiweb2.mlvtgxc.mongodb.net/?retryWrites=true&w=majority&appName=ApiWeb2', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on('connected', () => {
        console.log('Mongoose is connected');
    });
};
