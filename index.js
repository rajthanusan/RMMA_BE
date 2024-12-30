const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');
const foodRoutes = require('./routes/foodRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const eventRoutes = require('./routes/eventRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const imageRoutes = require('./routes/imageRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const mailRoutes = require('./routes/mailRoutes');
const subscribeRoutes = require('./routes/subscribeRoutes');
const roomRoutes = require('./routes/roomRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use('/auth', authRoutes);
app.use('/api', foodRoutes);
app.use('/api', bookingRoutes);
app.use('/api', eventRoutes);
app.use('/api', reviewRoutes);
app.use('/api/images', imageRoutes);
app.use('/api', aboutRoutes);
app.use('/api', serviceRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/mail', mailRoutes);
app.use('/api', subscribeRoutes);
app.use('/api/rooms', roomRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

