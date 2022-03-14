import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <p className="card__title">Buzz</p>
      <div className="card__text">
        <p className="card__tag">A Real Bitter Experience.</p>
        <p className="card__desc">
          A light, crisp and bitter IPA brewed with English and American hops. A
          small batch brewed only once.
        </p>
      </div>
      <div className="card__details">
        <div className="card__ph">
          <p className="card__details-title">pH</p>
          <p className="card__details-val">4.4</p>
        </div>
        <div className="card__release">
          <p className="card__details-title">Released</p>
          <p className="card__details-val">09/2007</p>
        </div>
        <div className="card__acl">
          <p className="card__details-title">ABV (%)</p>
          <p className="card__details-val">4.5</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
