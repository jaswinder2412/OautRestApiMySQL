require('dotenv').config({ path: __dirname + '/config.env' })
const express = require('express');
const app = express(); 

const PORT = process.env.PORT || 3000;

const apis = require('./routes/index_routers')


app.use('/', apis)  

app.listen(PORT, () => {
    console.log(`Started on PORT ${PORT}`);
})

//connection.end();