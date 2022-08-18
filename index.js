const express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
//file imports
const loginRouter = require('./api/login');

const PORT = 4001;
const app = express();
// Parsing
app.use(bodyParser.json());
//reach out to our user api
app.use('/api/user', loginRouter);

app.get('/', (req, res, next) => {
    res.sendFile('index.html', { root: path.join(__dirname) });
})


app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
})