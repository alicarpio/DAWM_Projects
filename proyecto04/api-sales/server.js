const express = require('express')
const connectDB = require('./config/db')
const productSales =require('./routes/productSales')
const cors = require('cors');
// connectDB()

const app = express();
connectDB()

app.use(cors());

app.use('/sales',productSales)


app.listen(3080,console.log('Server running on port 3080 '))
app.get('/',(req,res)=>{
    res.send('API SALES is running')
})