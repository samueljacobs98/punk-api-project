import { useState, useEffect } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header windowType={windowWidth > 618 ? "desk" : "mob"} />
      <Main windowType={windowWidth > 618 ? "desk" : "mob"} />
    </>
  );
}

export default App;
