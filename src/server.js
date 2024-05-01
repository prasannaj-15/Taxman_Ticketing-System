const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory ticket data store
let tickets = [];

// Routes
app.get('/api/tickets', (req, res) => {
  res.json(tickets);
});

app.post('/api/tickets', (req, res) => {
  const { title, description, status } = req.body;
  const newTicket = { id: Date.now(), title, description, status };
  tickets.push(newTicket);
  res.status(201).json(newTicket);
});

app.delete('/api/tickets/:id', (req, res) => {
  const { id } = req.params;
  tickets = tickets.filter(ticket => ticket.id !== parseInt(id));
  res.status(204).end();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
