const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  date: { type: Date, default: Date.now },
  checkInTime: Date,
  checkOutTime: Date,
  ipAddress: String
});

module.exports = mongoose.model('Attendance', attendanceSchema);
