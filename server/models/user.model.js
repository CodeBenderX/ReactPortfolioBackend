import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    }
});

userSchema.pre('save', function (next) {
    this.updated = Date.now();
    next();
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
export default User;
