import React from "react";
import Aside from "../Aside/Aside";
import Cards from "../Cards/Cards";

import "./Main.scss";

const Main = ({ windowType }) => {
  return (
    <main className="main">
      <Aside windowType={windowType} />
      <Cards />
    </main>
  );
};

export default Main;
