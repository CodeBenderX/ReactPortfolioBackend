import { Schema, model } from 'mongoose';

const ContactSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
});

export default model('Contact', ContactSchema);
