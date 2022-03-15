import React from "react";
import Card from "../../components/Card/Card";

import "./Cards.scss";

const Cards = ({ beers, theme }) => {
  const cardListJSX = beers.map((beer) => {
    return <Card key={beer.id} beer={beer} theme={theme} />;
  });

  return <div className="cards">{cardListJSX}</div>;
};

export default Cards;
