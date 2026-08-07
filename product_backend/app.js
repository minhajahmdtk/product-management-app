const express=require('express');
const app=express()
const port=3000;
const cors=require('cors')
require('dotenv').config()
const dotenv=require('dotenv')
const db=require('./config/db')
db();

// Routes
const Product=require('./routes/productRoutes');

// Models
const models=require('./models/Product')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products',Product)

app.listen(port,()=>{
  console.log(`server listening on port ${port}`)
})