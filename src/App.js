import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import DisplayQuoteCard from "./components/DisplayQuoteCard";

const sampleCard = {
  quote:
    "I can't even say the word 'titmouse' without gigggling like a schoolgirl.",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
};

function App() {
  const [card, setCard] = useState(sampleCard);

  const getNewQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes?count=1")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setCard(data[0]);
      });
  };

  return (
    <div className="App">
      <DisplayQuoteCard card={card} />
      <button type="button" onClick={getNewQuote}>
        Get a new quote!
      </button>
    </div>
  );
}

export default App;
