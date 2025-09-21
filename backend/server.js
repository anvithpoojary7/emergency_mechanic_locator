const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors = require('cors');

require('dotenv').config();



app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true, 
}));
app.use(express.json());

app.listen(5000,()=>{
     console.log(`server running at http://localhost:${5000}`);
})

