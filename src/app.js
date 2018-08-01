const express = require("express");
const config = require("config");

const cors = require('cors');
const app = express();

app.use(express.static('public'));
app.use('/api', cors(), require('./router'));

app.listen(config.server.port, () => {
    console.log(`app started at port ${config.server.port}`);
});