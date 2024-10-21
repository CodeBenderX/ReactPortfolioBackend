import Contact from '../models/contact.model.js';

// Fetch all contacts
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({ error: "Error fetching contacts" });
    }
};

// Add a new contact
export const addContact = async (req, res) => {
    const { firstname, lastname, email } = req.body;

    // Validate input
    if (!firstname || !lastname || !email) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newContact = new Contact({ firstname, lastname, email });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        console.error("Error adding contact:", error);
        res.status(500).json({ error: "Error adding contact" });
    }
};

// Get a specific contact by ID
export const getContactById = async (req, res) => {
    res.json(req.contact);
};

// Update a specific contact by ID
export const updateContact = async (req, res) => {
    const { firstname, lastname, email } = req.body;

    // Validate input
    if (!firstname || !lastname || !email) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.contact._id,
            { firstname, lastname, email },
            { new: true, runValidators: true }
        );
        res.json(updatedContact);
    } catch (error) {
        console.error("Error updating contact:", error);
        res.status(500).json({ error: "Error updating contact" });
    }
};

// Delete a specific contact by ID
// Delete a specific contact by ID
export const deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.contact._id);
        if (!deletedContact) {
            return res.status(404).json({ error: "Contact not found" });
        }
        res.json({ message: "Contact deleted successfully" });
    } catch (error) {
        console.error("Error deleting contact:", error);
        res.status(500).json({ error: "Error deleting contact" });
    }
};


// Delete all contacts
export const deleteAllContacts = async (req, res) => {
    try {
        await Contact.deleteMany({});
        res.json({ message: "All contacts deleted successfully" });
    } catch (error) {
        console.error("Error deleting all contacts:", error);
        res.status(500).json({ error: "Error deleting all contacts" });
    }
};

// Middleware to fetch contact by ID
export const contactByID = async (req, res, next, id) => {
    try {
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(404).json({ error: "Contact not found" });
        }
        req.contact = contact;
        next();
    } catch (error) {
        console.error("Error fetching contact by ID:", error);
        res.status(500).json({ error: "Error fetching contact by ID" });
    }
};
