//declare variables
const express = require('express');
const env = require("dotenv");
const cors = require("cors");
const db = require('./config/db')

const app = express();

//config env
env.config();

//connect to database
db.connect();


app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('hello world');
})

//listen port 
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
  })