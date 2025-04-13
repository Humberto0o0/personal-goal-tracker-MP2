// We import mongoose to create the schema (structure of the goal)
import mongoose from 'mongoose';

// This is the structure of a goal
const goalSchema = new mongoose.Schema({
  // The name of the goal
  title: {
    type: String,       // It must be text
    required: true,     // This field is required
    trim: true          // Removes extra spaces at the beginning and end
  },
  // A short explanation of the goal
  description: {
    type: String,
    required: true
  },
  // The date you want to finish the goal
  targetDate: {
    type: Date,
    required: true
  },
  // If the goal is done or not
  isAchieved: {
    type: Boolean,
    default: false      // Default is false (not achieved yet)
  },
  // Who created the goal
  createdBy: {
    type: String,
    default: "Anonymous"  // Default name if not provided
  }
});

// We create a Goal model using the schema above
const Goal = mongoose.model('Goal', goalSchema);

// We export the Goal model so other files can use it
export default Goal;
