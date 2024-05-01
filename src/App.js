import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TicketList from './components/TicketList';
import NewTicketForm from './components/NewTicketForm';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = () => {
    axios.get('/api/tickets')
      .then(response => {
        setTickets(response.data);
      })
      .catch(error => {
        console.error('Error fetching tickets:', error);
      });
  };

  const addTicket = (newTicket) => {
    setTickets([...tickets, newTicket]); // Update tickets state with the newly added ticket
  };

  const deleteTicket = (id) => {
    axios.delete(`/api/tickets/${id}`)
      .then(() => {
        setTickets(tickets.filter(ticket => ticket.id !== id));
      })
      .catch(error => {
        console.error('Error deleting ticket:', error);
      });
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="App">
      <h1>Simple Ticketing System</h1>
      <NewTicketForm addTicket={addTicket} />
      <TicketList tickets={tickets} deleteTicket={deleteTicket} />
    </div>
  );
}

export default App;
