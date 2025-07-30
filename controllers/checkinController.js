const Attendance = require('../models/Attendence');
const getClientIp = require('../utils/getIp');

const OFFICE_IP = '172.20.10.12'; // Replace with actual IP

exports.markAttendance = async (req, res) => {
  const ip = getClientIp(req);
  const userId = req.user._id;

  if (ip !== OFFICE_IP) {
    return res.status(403).json({ message: 'Access Denied. Invalid Location' });
  }

  const today = new Date().toDateString();
  let attendance = await Attendance.findOne({
    employee: userId,
    date: { $gte: new Date(today), $lt: new Date(new Date(today).getTime() + 86400000) }
  });

  if (!attendance) {
    attendance = new Attendance({
      employee: userId,
      checkInTime: new Date(),
      ipAddress: ip
    });
  } else {
    if (!attendance.checkOutTime) {
      attendance.checkOutTime = new Date();
    } else {
      return res.status(400).json({ message: 'Already Checked Out' });
    }
  }

  await attendance.save();
  res.json({ message: 'Attendance marked', attendance });
};
