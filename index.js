const express = require("express");
const {Router} = require('express')
const app = express();
require("dotenv").config();

const PORT = process.env.PORT

app.use('/api',)


app.listen(PORT, ()=>{
    console.log(`server is now runing on PORT ${PORT}`)
});
