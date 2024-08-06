// src/components/ContactManagement.js
import React, { useState } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import axios from 'axios';

const ManageQueries = () => {
  const [currentContact, setCurrentContact] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (contact) => {
    setCurrentContact(contact);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      axios.delete(`/api/contacts/${id}`)
        .then(() => setRefresh(!refresh))
        .catch(error => console.error('Error deleting contact:', error));
    }
  };

  const handleSave = () => {
    setCurrentContact(null);
    setRefresh(!refresh);
  };

  return (
    <div className="container mx-auto p-4">
      <ContactForm currentContact={currentContact} onSave={handleSave} />
      <ContactList onEdit={handleEdit} onDelete={handleDelete} key={refresh} />
    </div>
  );
};

export default ManageQueries;
