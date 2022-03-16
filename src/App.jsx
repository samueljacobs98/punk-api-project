import { useState, useEffect } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";
import Toggle from "./components/Toggle/Toggle";

import {
  sortData,
  updateColors,
  getExtensions,
  getActiveFilters,
} from "./utils/beerUtils.js";

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
    updateColors(theme);
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

  const getBeers = async (beerName, activeFilters) => {
    const extension = getExtensions(beerName, activeFilters);
    const res = await fetch(url + extension);

    if (!res.ok) {
      resetMethod();
      return;
    }

    let data = await res.json();
    if (filters.acidic)
      data = data.filter((beer) => {
        return beer.ph < 4;
      });

    data = sortData(data, sortMethod);
    setBeers(data);
  };

  useEffect(() => {
    const [beerName, activeFilters] = getActiveFilters(searchTerm, filters);
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
