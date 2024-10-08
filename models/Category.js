const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name:{type: String,required:true,unquie:true},
    slug:{type: String,required:true,unquie:true},
    description:{type: String,required:false}  
},{timestamps:true})


module.exports = mongoose.model('Category',CategorySchema);