import { Router } from 'express';
import { getContacts, addContact, getContactById, updateContact, deleteContact, deleteAllContacts, contactByID } from '../controllers/contact.controller.js';

const router = Router();

// Routes for handling contacts
router.get('/api/contacts', getContacts);
router.post('/api/contacts', addContact);

// Route for deleting all contacts
router.delete('/api/contacts', deleteAllContacts); // Delete all contacts

// Route for a single contact
router.route('/api/contacts/:contactId')
    .get(getContactById)    // Get a specific contact by ID
    .put(updateContact)     // Update a specific contact by ID
    .delete(deleteContact); // Delete a specific contact by ID

// Middleware to fetch contact by ID
router.param('contactId', contactByID);

export default router;
