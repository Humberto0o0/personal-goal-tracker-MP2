// We import express to create the server
import express from 'express';

// We import dotenv to read the .env file
import dotenv from 'dotenv';

// We import the function that connects to MongoDB
import connectDB from './config/db.js';

// We import the routes for goals
import goalRoutes from './routes/goalRoutes.js';

// Load variables from .env file (like MONGO_URI and PORT)
dotenv.config();

// Connect to MongoDB
connectDB();

// Create the Express app
const app = express();

// This allows the app to read JSON in the body of requests
app.use(express.json());

// Use the goal routes when the path starts with /api
app.use('/api', goalRoutes);

// Set the port (from .env or default to 3000)
const PORT = process.env.PORT || 3000;

// Start the server and show a message
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

