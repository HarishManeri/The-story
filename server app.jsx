const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurantRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/the-story', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use('/api/restaurants', restaurantRoutes);

module.exports = app;
