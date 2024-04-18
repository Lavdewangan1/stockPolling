import { useState } from "react";
import StockPolling from "./components/StockPolling";

function App() {
  const [n, setN] = useState(null);
  const [status, setStatus] = useState(false);

  function handleSubmit() {
    setStatus(true);
  }

  return (
    <>
      <div className="main-container w-screen h-screen flex items-center justify-center ">
        <form onSubmit={handleSubmit}>
          <input type="text" name="" id="" onChange={(e) => { setN(e.target.value) }} className=" bg-[#ffd5d5]" />
          <button>Submit</button>
        </form>
        {status && <StockPolling n={n} />}
      </div>
    </>
  )
}

export default App;
