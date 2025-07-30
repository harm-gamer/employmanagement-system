const mongoose = require('mongoose');
async function connectDB(){
   await mongoose.connect('mongodb://localhost:27017/employmanagement' );
   console.log('MongoDB connected');
}

module.exports = connectDB;