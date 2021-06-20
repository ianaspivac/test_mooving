import "./CardFeatured.css";

import { BrowserRouter as Router, Link } from "react-router-dom";
import HouseDetails from "../HouseDetails/HouseDetails";

function CardFeatured(props) {
  return (
    <div className="card-featured">
      <Link to="/">
        {props.today ? (
          <span className="card-featured__today">Posted today</span>
        ) : (
          <span></span>
        )}
        <div className="card-featured__image">
          <img src={props.image} />
        </div>
        <div className="card-featured__info">
          <p className="card-featured__price">£{props.price}</p>
          <HouseDetails
            nrBed={props.nrBed}
            nrBath={props.nrBath}
            size={props.size}
            location={props.location}
          />
        </div>
      </Link>
    </div>
  );
}

export default CardFeatured;
