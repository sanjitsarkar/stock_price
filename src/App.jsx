import React, { useState } from "react";
import "./App.css";
import { Footer } from "./Footer";

function App() {
  const [initialPrice, setInitialPrice] = useState();
  const [numOfStocks, setNumOfStocks] = useState();
  const [currentPrice, setCurrentPrice] = useState();
  const [output, setOutput] = useState("");

  const calculate = (e) => {
    e.preventDefault();
    if (initialPrice > currentPrice) {
      var loss = (initialPrice - currentPrice) * numOfStocks;
      var lossPercentage = (loss / initialPrice) * 100;

      setOutput(
        `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
      );
    } else if (currentPrice > initialPrice) {
      var profit = (currentPrice - initialPrice) * numOfStocks;
      var profitPercentage = (profit / initialPrice) * 100;

      setOutput(
        `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
      );
    } else {
      setOutput(`No Profit No Loss`);
    }
  };

  return (
    <div className="App">
      <h1>Stock Profile & Loss Calculator</h1>

      <form
        onSubmit={(e) => {
          calculate(e);
        }}
      >
        <input
          type="number"
          value={initialPrice}
          placeholder="Enter initial price"
          onChange={(e) => {
            setInitialPrice(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Enter the number of stocks bought"
          value={numOfStocks}
          onChange={(e) => {
            setNumOfStocks(e.target.value);
          }}
        />
        <input
          type="num"
          value={currentPrice}
          placeholder="Enter the current price of the stocks"
          onChange={(e) => {
            setCurrentPrice(e.target.value);
          }}
        />
        <button type="submit">Calculate</button>
        <p>{output}</p>
      </form>
      <Footer />
    </div>
  );
}

export default App;
