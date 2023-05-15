import { useEffect, useContext } from "react";
import SearchBar from "../components/SearchBar";
import { StarWarsContext } from "../context/Context";
import Image from "../assets/Image.json";
import ShipCard from "../components/ShipCard";

const Ships = () => {
  const {
    ships,
    setShips,
    setAllShips,
    loading,
    setLoading,
    allShips,
    page,
    setPage,
  } = useContext(StarWarsContext);

  useEffect(() => {}, [ships, allShips]);
  const handleShowMore = () => {
    setLoading(true);
    fetch(`https://swapi.dev/api/starships/?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setShips((prevShips) => {
          let newData = res.results;
          return [...prevShips, ...newData];
        });
        setAllShips((prevAllShips) => {
          let newData = res.results;
          return [...prevAllShips, ...newData];
        });
      })
      .finally(() => {
        setPage(page + 1);
        setLoading(false);
      });
  };
  useEffect(() => {}, [loading]);
  if (!ships) return <h2 style={{ color: "white" }}>Loading...</h2>;
  return (
    <div className="container-ships">
      <nav id="search-bar-nav">
        <SearchBar />
      </nav>
      <main id="main">
        {ships.map((item, index) => {
          let [{ img: image }] = Image.filter(
            (img) => img.name.toLowerCase() === item.name.toLowerCase()
          );
          return <ShipCard key={index} item={item} image={image} />;
        })}
        {page <= 4 && (
          <button
            onClick={handleShowMore}
            disabled={loading && true}
            className="btn-show-more"
          >
            {loading ? "Loading..." : "Show More"}
          </button>
        )}
      </main>
    </div>
  );
};
export default Ships;
