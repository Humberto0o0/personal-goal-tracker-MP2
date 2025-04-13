// We import the Goal model (the schema for goals)
import Goal from '../models/Goal.js';

// This is a function to create a new goal
export const createGoal = async (req, res) => {
  try {
    // We get the data sent by the user and make a new Goal
    const goal = new Goal(req.body);

    // We save the new goal to the database
    await goal.save();

    // We send back a success message and the saved goal
    res.status(201).json({ message: "Goal created successfully", goal });
  } catch (error) {
    // If there is a problem, we send an error message
    res.status(400).json({ error: error.message });
  }
};
