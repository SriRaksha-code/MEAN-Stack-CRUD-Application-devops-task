const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();


app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mean_crud';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

const tutorialRoutes = require('./app/routes/tutorial.routes.js')
app.use('/api/tutorials', tutorialRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

