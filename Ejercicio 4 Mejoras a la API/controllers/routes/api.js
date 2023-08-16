// routes/api
const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.get('/calculateTotals/:ticketId', async (req, res) => {
  const { ticketId } = req.params;
  const totals = await ticketController.calculateTotals(ticketId);
  res.json(totals);
});

router.post('/updateTotalsAndStock/:ticketId', async (req, res) => {
  const { ticketId } = req.params;
  await ticketController.updateTicketTotalsAndStock(ticketId);
  res.json({ message: 'Totals and stock updated successfully.' });
});

module.exports = router;
