const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts')
const categoryRoutes = require('./routes/categories')
const cors = require('cors');

const app = express()
const PORT = process.env.PORT || 8000;

//Middleware
app.use(bodyParser.json())
app.use(cors());

//connect MongoDB 
mongoose.connect('mongodb://localhost:27017/blog')
.then(()=>console.log('MongoDB Connected'))
.catch(error=>console.log('DB error',error))

//use Routes
app.use('/api/posts',postRoutes)
app.use('/api/categories',categoryRoutes)
app.listen(PORT,()=>console.log(`Server Running on port ${PORT}`))