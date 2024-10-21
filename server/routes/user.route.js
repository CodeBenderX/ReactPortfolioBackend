import { Router } from 'express';
import { getUsers, addUser, getUserById, updateUser, deleteUser, deleteAllUsers } from '../controllers/user.controller.js';

const router = Router();

// Routes for individual user operations
router.get('/api/users', getUsers); // Get all users
router.post('/api/users', addUser); // Add a new user
router.get('/api/users/:userId', getUserById); // Get a user by ID
router.put('/api/users/:userId', updateUser); // Update a user by ID
router.delete('/api/users/:userId', deleteUser); // Delete a user by ID

// Routes for bulk user operations
router.delete('/api/users', deleteAllUsers); // Delete all users

export default router;
