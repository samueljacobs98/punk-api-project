import React from "react";
import Aside from "../Aside/Aside";
import Cards from "../Cards/Cards";

import "./Main.scss";

const Main = ({ windowType, beers, filters, handleFilter }) => {
  return (
    <main className="main">
      <Aside
        windowType={windowType}
        filters={filters}
        handleFilter={handleFilter}
      />
      <Cards beers={beers} />
    </main>
  );
};

export default Main;
