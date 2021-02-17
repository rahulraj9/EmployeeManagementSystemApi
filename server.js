const express = require('express');
const app = express();
const routes = require('./routes/routes')
const port = 9000;

app.use(express.json())

app.use('/', routes);

app.use((error, req, res, next) => {
    let response = {
        success: false,
        message: "Internal Server Error",
        error: error
    }
    res.status(500).send(response);
})

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
    require('./dbConfig/dbconnection')
})