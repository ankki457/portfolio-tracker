const express = require('express');
const router = express.Router();
const Stock = require('../models/Stock');
const axios = require('axios');

// Add a new stock
router.post('/', async (req, res) => {
  const newStock = new Stock(req.body);
  try {
    const savedStock = await newStock.save();
    res.status(201).json(savedStock);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all stocks
router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a stock
router.put('/:id', async (req, res) => {
  try {
    const updatedStock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedStock);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a stock
router.delete('/:id', async (req, res) => {
  try {
    await Stock.findByIdAndDelete(req.params.id);
    res.json({ message: 'Stock deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Fetch portfolio value
router.get('/portfolio', async (req, res) => {
  try {
    const stocks = await Stock.find();
    let totalValue = 0;
    let topStock = null;

    for (const stock of stocks) {
      try {
        const response = await axios.get(`https://www.alphavantage.co/query`, {
          params: {
            function: 'TIME_SERIES_INTRADAY',
            symbol: stock.ticker,
            interval: '1min',
            apikey: process.env.ALPHA_VANTAGE_API_KEY
          }
        });

        const timeSeries = response.data['Time Series (1min)'];
        if (!timeSeries) {
          console.error(`No data for ${stock.ticker}`);
          continue;
        }

        const latestTime = Object.keys(timeSeries)[0];
        const currentPrice = parseFloat(timeSeries[latestTime]['1. open']);
        const stockValue = currentPrice * stock.quantity;
        totalValue += stockValue;

        if (!topStock || stockValue > topStock.value) {
          topStock = { name: stock.name, value: stockValue };
        }
      } catch (apiError) {
        console.error(`Error fetching data for ${stock.ticker}:`, apiError.message);
      }
    }

    res.json({ totalValue, topStock });
  } catch (err) {
    console.error('Error fetching portfolio:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;