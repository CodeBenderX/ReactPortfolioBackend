import { config } from 'dotenv';
import express from 'express';
import { connect } from 'mongoose';
import userRoutes from './routes/user.route.js';
import contactRoutes from './routes/contact.route.js';

// Initialize the app
const app = express(); //

config(); // Load environment variables

// Middleware to parse JSON
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB Connection
connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.send('Hello, this is my portfolio backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use('/', userRoutes);
app.use('/', contactRoutes);
