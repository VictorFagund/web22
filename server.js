const app = require('./app');
const connectDB = require('./config/dbconfig');
const port = 3000;

connectDB();

app.listen(port, () => {
    console.log(`Server online on port ${port}`);
});
