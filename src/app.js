const express = require("express");
const config = require("config");

const app = express();

app.use(express.static('public'));
app.use('/api', require('./router'));

app.listen(config.server.port, () => {
    console.log(`app started at port ${config.server.port}`);
});