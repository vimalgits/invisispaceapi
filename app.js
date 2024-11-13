const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const stateRoutes = require('./routes/stateRoute');
const cityRoutes = require('./routes/cityRoute');


dotenv.config();

const app = express();

// Middleware
app.use(cors());  // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api', stateRoutes);
app.use('/api', cityRoutes);

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
