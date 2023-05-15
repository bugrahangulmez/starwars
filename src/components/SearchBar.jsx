import { useContext, useState } from "react";
import { StarWarsContext } from "../context/Context";

const SearchBar = () => {
  const { setShips, allShips } = useContext(StarWarsContext);
  const [text, setText] = useState("");
  const handleTextChange = (target) => {
    setText(target.value);
  };
  const handleSearch = () => {
    setShips((prevShips) => {
      return prevShips.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
    });
  };
  const handleShowAll = () => {
    setShips(allShips);
    setText("");
  };
  return (
    <div className="container-search-bar">
      <nav>
        <input
          value={text}
          type="text"
          onChange={({ target }) => {
            handleTextChange(target);
          }}
        />
        <button onClick={handleSearch} className="button-search">
          Search
        </button>
        <button onClick={handleShowAll} className="button-clear">
          Show All
        </button>
      </nav>
    </div>
  );
};
export default SearchBar;
