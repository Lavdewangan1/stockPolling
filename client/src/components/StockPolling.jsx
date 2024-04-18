import React, { useState } from 'react'

function StockPolling(props) {
  const [data, setData] = useState([]);

  function stockFetch() {
    fetch("http://localhost:3000/stocks", props.n).then((data) => {
      setData(data);
    }).catch((e) => {
      console.log(e);
    })
  }

  setInterval(stockFetch, 2000);

  return (
    <div>
      {data.map((stock) => {
        <div>
          <p>
            stock.name
          </p>
          <span>stock.price</span>
        </div>
      })}
    </div>
  )
}

export default StockPolling