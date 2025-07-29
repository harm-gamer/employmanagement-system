const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // hash this!
  role: { type: String, default: 'employee' }
});

module.exports = mongoose.model('Employee', employeeSchema);
