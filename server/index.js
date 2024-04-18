const express = require('express');
const fs = require('fs');
const changeStockPrice = require('./changeFile.js');
const app = express();
app.use(express.json());
app.use(express.static('public'));

app.get('/stocks', (req, res) => {
  try {
    const stockData = fs.readFileSync('./server/stocks.json', 'utf8');
    const stocks = JSON.parse(stockData);
    res.json(stocks);
  } catch (error) {
    res.status(500).send(`An error occurred: ${error.message}`);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  changeStockPrice();
});