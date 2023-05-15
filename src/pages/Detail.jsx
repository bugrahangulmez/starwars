import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Image from "../assets/Image.json";
import DetailCard from "../components/DetailCard";
import { StarWarsContext } from "../context/Context";

const Detail = () => {
  const { ship: shipName } = useParams();
  const [detail, setDetail] = useState();
  const { ships, setPage } = useContext(StarWarsContext);
  let result;

  console.log("ship: ", shipName);
  useEffect(() => {
    setDetail(() => {
      return ships.filter(
        (item) => item.name.toLowerCase() === shipName.toLowerCase()
      );
    });
  }, []);

  if (!detail) return <h2 style={{ color: "white" }}>Loading...</h2>;
  return (
    <div id="detail">
      <Link to={".."} className="btn-back">
        Back to All Ships
      </Link>
      {detail.map((item) => {
        let [{ img: image }] = Image.filter(
          (imageItem) =>
            imageItem.name.toLowerCase() === item.name.toLowerCase()
        );
        return <DetailCard key={item.name} item={item} image={image} />;
      })}
    </div>
  );
};
export default Detail;
