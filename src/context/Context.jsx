import { createContext, useState, useEffect } from "react";

export const StarWarsContext = createContext();

const Context = ({ children }) => {
  const [ships, setShips] = useState();
  const [allShips, setAllShips] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setShips(res.results);
        setAllShips(res.results);
        setPage(page + 1);
      });
  }, []);

  const values = {
    ships,
    setShips,
    allShips,
    setAllShips,
    loading,
    setLoading,
    page,
    setPage,
  };
  return (
    <StarWarsContext.Provider value={values}>
      {children}
    </StarWarsContext.Provider>
  );
};

export default Context;
