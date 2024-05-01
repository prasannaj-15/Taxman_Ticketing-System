import React from 'react';

const Ticket = ({ ticket, deleteTicket }) => {
  const { id, title, description, status } = ticket;

  const handleDelete = () => {
    deleteTicket(id);
  };

  return (
    <div className="ticket">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Status: {status}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Ticket;
