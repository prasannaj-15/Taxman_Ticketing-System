import React, { useState } from 'react';
import axios from 'axios'; // Import Axios library for making HTTP requests

const NewTicketForm = ({ addTicket }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    // Create a new ticket object with form data
    const newTicket = { title, description, status: 'open' };

    // Make a POST request to add the new ticket
    axios.post('/api/tickets', newTicket)
      .then(response => {
        addTicket(response.data); // Update tickets state with the newly added ticket
        setTitle(''); // Clear form fields after successful submission
        setDescription('');
      })
      .catch(error => {
        console.error('Error adding ticket:', error);
      });
  };

  return (
    <div className="new-ticket-form">
      <h2>Create New Ticket</h2>
      <form>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit" onClick={handleSubmit}>Create Ticket</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
