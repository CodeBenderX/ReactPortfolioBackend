import User from '../models/user.model.js';

// Get all users
export async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
    }
}

// Get a single user by ID
export async function getUserById(req, res) {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user" });
    }
}

// Add a new user
export async function addUser(req, res) {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: "Error adding user" });
    }
}

// Update a user by ID
export async function updateUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: "Error updating user" });
    }
}

// Delete a user by ID
export async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting user" });
    }
}


// Delete all users
export async function deleteAllUsers(req, res) {
    try {
        await User.deleteMany({});
        res.json({ message: "All users deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting all users" });
    }
}
