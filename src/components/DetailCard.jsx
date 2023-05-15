const DetailCard = ({ item, image }) => {
  return (
    <div>
      <div className="container-detail-card">
        <div className="up">
          <img src={image} />
          <p className="ship-name">{item.name}</p>
        </div>
        <div className="down">
          <div className="left">
            <p className="model-title">Model</p>
            <p className="model">{item.name}</p>
            <p className="passengers-title">Passengers</p>
            <p className="passengers">{item.passengers}</p>
            <p className="mas-title">Max Atmosphering Speed</p>
            <p className="mas">{item.max_atmosphering_speed}</p>
          </div>
          <div className="right">
            <p className="manufacturer-title">Manufacturer</p>
            <p className="manufacturer">{item.manufacturer}</p>
            <p className="crew-title">Crew</p>
            <p className="crew">{item.crew}</p>
            <p className="cargo-capacity-title">Cargo Capacity</p>
            <p className="cargo-capacity">{item.cargo_capacity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailCard;
