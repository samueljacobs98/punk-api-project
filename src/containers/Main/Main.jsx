import React from "react";
import Aside from "../Aside/Aside";
import Cards from "../Cards/Cards";

import "./Main.scss";

const Main = ({
  windowType,
  beers,
  filters,
  handleFilter,
  handleSort,
  theme,
}) => {
  return (
    <main className="main">
      <Aside
        windowType={windowType}
        filters={filters}
        handleFilter={handleFilter}
        handleSort={handleSort}
        theme={theme}
      />
      <Cards beers={beers} theme={theme} />
    </main>
  );
};

export default Main;
