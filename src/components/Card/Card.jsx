import React from "react";
import "./Card.scss";

const Card = ({ beer, theme }) => {
  let cardClass = "card";
  if (theme === "dark") cardClass += " card--dark";
  return (
    <div className={cardClass}>
      <p className="card__title">{beer.name}</p>
      <div className="card__text">
        <p className="card__tag">{beer.tagline}</p>
        <p className="card__desc">{beer.description}</p>
      </div>
      <div className="card__details">
        <div className="card__ph">
          <p className="card__details-title">pH</p>
          <p className="card__details-val">{beer.ph}</p>
        </div>
        <div className="card__release">
          <p className="card__details-title">Released</p>
          <p className="card__details-val">{beer.first_brewed}</p>
        </div>
        <div className="card__acl">
          <p className="card__details-title">ABV (%)</p>
          <p className="card__details-val">{beer.abv}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
