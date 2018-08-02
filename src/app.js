const express = require("express");
const bodyParser = require('body-parser');
const config = require("config");

const cors = require('cors');
const app = express();

// const mock=require('./students/mock');

// mock.forEach(element => {
//     connection.query('INSERT INTO students SET ?', element, function (error, results, fields) {
//         console.log(error, results);
//     });
// });


app.use(express.static('public'));
app.use('/api', 
        bodyParser.json(),
        cors(), 
        require('./router'));

app.listen(config.server.port, () => {
    console.log(`app started at port ${config.server.port}`);
});