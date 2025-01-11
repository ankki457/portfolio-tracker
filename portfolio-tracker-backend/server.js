const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI; // Ensure this matches your .env file

if (!MONGO_URI) {
  console.error('Error: MONGO_URI is not defined in the environment variables.');
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

const stockRoutes = require('./routes/stocks');
app.use('/api/stocks', stockRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});