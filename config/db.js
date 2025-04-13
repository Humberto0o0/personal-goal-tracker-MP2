// We are using mongoose to connect to MongoDB
import mongoose from 'mongoose';

// We are using dotenv to read the .env file
import dotenv from 'dotenv';

// This line loads the .env file so we can use its variables
dotenv.config();

// This is an async function to connect to MongoDB
const connectDB = async () => {
  try {
    // Try to connect using the connection string from .env file
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected"); // Show success message
  } catch (error) {
    // If it fails, show error message
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Stop the program
  }
};

// We send this function to other files that want to connect to MongoDB
export default connectDB;
