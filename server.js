const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/checkin', require('./routes/checkInRoutes'));

// Server start
app.listen(process.env.PORT || 5000, () => {
  console.log('Server running');
});
