const express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
//file imports
const loginRouter = require('./api/login');
//const { main } = require('./modules/database');
const {main} = require('./modules/mongooseDB');
const mongRouter = require('./modules/mongooseDB');
const addressRouter = require('./api/test/address');
const intiationRouter = require('./api/route/initiation');
const validator = require('validator');

const PORT = 4001;
const app = express();
// Parsing
app.use(bodyParser.json());
//reach out to our user api
app.use('/api/user', loginRouter);
app.use('/note', mongRouter);
app.use('/address', addressRouter);
app.use('/initiation', intiationRouter);
app.get('/', (req, res, next) => {
    res.sendFile('index.html', { root: path.join(__dirname) });
})



//only listen to port once connected to DB
main().catch(console.error).then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port: ${PORT}`);
    })
});

