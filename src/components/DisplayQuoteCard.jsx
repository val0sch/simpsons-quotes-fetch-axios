import React from "react";

function DisplayQuoteCard({ card }) {
  return (
    <div className="quote-card">
      <img src={card.image} alt="Simpson's character" />
      <h2>{card.character}</h2>
      <i>{card.quote}</i>
    </div>
  );
}

export default DisplayQuoteCard;
