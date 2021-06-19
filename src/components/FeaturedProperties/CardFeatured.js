import "./CardFeatured.css";
import bed from "./icons/bed.svg";
import bath from "./icons/bath.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

function CardFeatured(props) {
  return (
    <div className="card-featured">
      <div className="card-featured__image">
          <img src={props.image} />
      </div>
      <div className="card-featured__info">
        <p className="card-featured__price">£{props.price}</p>
        <div className="card-featured__details">
          <img src={bed} />
          <span>{props.nrBed} Bed</span>
          <img src={bath} />
          <span>{props.nrBath} Baths</span>
          <span>{props.size} sq. ft.</span>
        </div>
        <div className="card-featured__location"><p>{props.location}</p></div>
      </div>
    </div>
  );
}

export default CardFeatured;
