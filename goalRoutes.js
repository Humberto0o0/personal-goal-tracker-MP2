// We import express to create the router
import express from 'express';

// We import the createGoal function from the controller
import { createGoal } from '../controllers/goalController.js';

// We create a new router to handle routes
const router = express.Router();

// When a POST request is made to /api/goals, run the createGoal function
router.post('/goals', createGoal);

// We export the router so it can be used in server.js
export default router;
