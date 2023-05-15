import { Link } from "react-router-dom";

const ShipCard = ({ item, image }) => {
  return (
    <div>
      <div className="card-container">
        <div className="container-image">
          <img src={image} alt="image" />
        </div>
        <div className="detail">
          <div className="left">
            <p className="name">{item.name}</p>
            <p className="title-model">Model</p>
            <p className="model">{item.model}</p>
            <p className="title-hyperdrive">Hyperdrive Rating</p>
            <p className="hyperdrive">{item.hyperdrive_rating}</p>
          </div>
          <div className="right">
            <Link to={item.name}>
              <button className="btn-detail">Detail</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShipCard;
