import { useState, useEffect } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";
import Toggle from "./components/Toggle/Toggle";

function App() {
  // Window State

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  // Theme State

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    document.body.style.setProperty(
      "background-color",
      `var(--${theme}-color)`
    );
    const root = document.querySelector(":root");
    theme === "light"
      ? root.style.setProperty("--font-color", "#28394a")
      : root.style.setProperty("--font-color", "#f2f1ed");
  }, [theme]);

  // Beers State

  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMethod, setSortMethod] = useState("none");
  const [filters, setFilters] = useState({
    highABV: false,
    classicRange: false,
    acidic: false,
  });

  const resetMethod = () => {
    setBeers([]);
    setSearchTerm("");
    setSortMethod("none");
    setFilters({
      highABV: false,
      classicRange: false,
      acidic: false,
    });
  };
  const url = "https://api.punkapi.com/v2/beers";

  const sortData = (data) => {
    switch (sortMethod) {
      case "none":
        return data;
      case "abv-h2l":
        return data.sort((a, b) => b.abv - a.abv);
      case "abv-l2h":
        return data.sort((a, b) => a.abv - b.abv);
      case "acid-h2l":
        return data.sort((a, b) => b.ph - a.ph);
      case "acid-l2h":
        return data.sort((a, b) => a.ph - b.ph);
    }
  };

  const getBeers = async (beerName, activeFilters) => {
    let connecter = "";
    if (beerName && activeFilters) connecter = "&";

    const specifiers = beerName + connecter + activeFilters;

    let joiner = "";
    if (specifiers.length) joiner = "?";

    const res = await fetch(url + joiner + specifiers);
    if (!res.ok) {
      resetMethod();
      return;
    }
    let data = await res.json();
    if (filters.acidic)
      data = data.filter((beer) => {
        return beer.ph < 4;
      });

    data = sortData(data);
    setBeers(data);
  };

  useEffect(() => {
    const beerName = searchTerm ? `beer_name=${searchTerm}` : "";
    let activeFilters = "";
    if (filters.highABV) activeFilters += "abv_gt=6";
    if (filters.highABV && filters.classicRange)
      activeFilters += "&brewed_before=012010";
    if (filters.classicRange) activeFilters += "brewed_before=012010";
    getBeers(beerName, activeFilters);
  }, [searchTerm, filters, sortMethod]);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const handleFilter = (event) => {
    const filter = event.target.className;
    if (filter.includes("highABV")) {
      setFilters({ ...filters, highABV: !filters.highABV });
    }
    if (filter.includes("classic")) {
      setFilters({ ...filters, classicRange: !filters.classicRange });
    }
    if (filter.includes("ph")) {
      setFilters({ ...filters, acidic: !filters.acidic });
    }
  };

  const handleSort = (event) => {
    const sortMethod = event.target.value;
    setSortMethod(sortMethod);
  };

  const windowType = windowWidth > 618 ? "desk" : "mob";

  return (
    <>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <Header
        windowType={windowType}
        searchTerm={searchTerm}
        handleInput={handleInput}
        theme={theme}
      />
      <Main
        windowType={windowType}
        beers={beers}
        filters={filters}
        handleFilter={handleFilter}
        handleSort={handleSort}
        theme={theme}
      />
    </>
  );
}

export default App;
