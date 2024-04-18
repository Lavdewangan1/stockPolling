const fs = require('fs');

var refreshInterval = 1000;

function changeStockPrice() {
  function changePrice() {
    try {
      const stockData = fs.readFileSync('./server/stocks.json', 'utf8');
      const stocks = JSON.parse(stockData);
      stocks.forEach(stock => {
        const refreshInterval = stock.refreshInterval * 1000;
        const priceChange = Math.floor(Math.random() * 11) - 4;
        stock.price += priceChange;
        if (stock.price < 0) {
          stock.price = 0;
        }
      });
      fs.writeFile('./server/stocks.json', JSON.stringify(stocks, null, 2), (err) => {
        if (err) {
          console.error(`An error occurred: ${err.message}`);
        }
      });
    } catch (error) {
      console.error(`An error occurred: ${error.message}`);
    }
  }
  setInterval(changePrice, refreshInterval);
}

module.exports = changeStockPrice;