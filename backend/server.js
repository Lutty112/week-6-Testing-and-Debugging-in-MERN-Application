const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bugRoutes = require('./routes/bugRoutes.js');
const errorHandler = require('./middleware/errorHandler.js')


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/bugs', bugRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost:27017/BugTracker').then(() => {
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  });
}

module.exports = app;