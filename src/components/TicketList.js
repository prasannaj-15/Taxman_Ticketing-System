import React from 'react';
import Ticket from './Ticket';

const TicketList = ({ tickets, deleteTicket }) => {
  return (
    <div className="ticket-list">
      <h2>Tickets</h2>
      {tickets.map(ticket => (
        <Ticket key={ticket.id} ticket={ticket} deleteTicket={deleteTicket} />
      ))}
    </div>
  );
}

export default TicketList;
