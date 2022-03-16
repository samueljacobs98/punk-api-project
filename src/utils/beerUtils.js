export const sortData = (data, method) => {
  switch (method) {
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

export const updateColors = (theme) => {
  document.body.style.setProperty("background-color", `var(--${theme}-color)`);
  const root = document.querySelector(":root");
  theme === "light"
    ? root.style.setProperty("--font-color", "#28394a")
    : root.style.setProperty("--font-color", "#f2f1ed");
};

export const getExtensions = (beerName, activeFilters) => {
  let connecter = "";
  if (beerName && activeFilters) connecter = "&";

  const specifiers = beerName + connecter + activeFilters;

  let joiner = "";
  if (specifiers.length) joiner = "?";
  return joiner + specifiers;
};

export const getActiveFilters = (searchTerm, filters) => {
  const beerName = searchTerm ? `beer_name=${searchTerm}` : "";
  let activeFilters = "";
  if (filters.highABV) activeFilters += "abv_gt=6";
  if (filters.highABV && filters.classicRange)
    activeFilters += "&brewed_before=012010";
  if (filters.classicRange) activeFilters += "brewed_before=012010";
  return [beerName, activeFilters];
};
