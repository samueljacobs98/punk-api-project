import { useState, useEffect } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";

function App() {
  // Window State

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  // Beers State

  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    highABV: false,
    classicRange: false,
    acidic: false,
  });
  const url = "https://api.punkapi.com/v2/beers";

  const getBeers = async (beerName, activeFilters) => {
    let connecter = "";
    if (beerName && activeFilters) connecter = "&";
    const specifiers = beerName + connecter + activeFilters; // highABV // ClassicRange // Acidic
    console.log(specifiers);

    let joiner = "";
    if (specifiers.length) joiner = "?";
    const res = await fetch(url + joiner + specifiers);
    if (!res.ok) {
      setBeers([]);
      setFilters({ highABV: false, classicRange: false, acidic: false });
    } else {
      const data = await res.json();
      setBeers(data);
    }
  };

  useEffect(() => {
    const beerName = searchTerm ? `beer_name=${searchTerm}` : "";
    let activeFilters = "";
    if (filters.highABV) activeFilters += "abv_gt=6";
    if (filters.highABV && filters.classicRange)
      activeFilters += "&brewed_before=012010";
    if (filters.classicRange) activeFilters += "brewed_before=012010";
    getBeers(beerName, activeFilters);
  }, [searchTerm, filters]);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    console.log(cleanInput);
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

  return (
    <>
      <Header
        windowType={windowWidth > 618 ? "desk" : "mob"}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <Main
        windowType={windowWidth > 618 ? "desk" : "mob"}
        beers={beers}
        filters={filters}
        handleFilter={handleFilter}
      />
    </>
  );
}

export default App;
