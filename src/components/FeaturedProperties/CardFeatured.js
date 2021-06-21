import "./CardFeatured.css";

import { BrowserRouter as Router, Link } from "react-router-dom";
import HouseDetails from "../HouseDetails/HouseDetails";
import {useState} from "react";

function CardFeatured(props) {
  const [isHovered,setIsHovered]=useState(false);
  
  
  const hoverImage = (event) => {   
    setIsHovered(!isHovered);
    props.setHovered(isHovered);    
  };
  return (
    <div className={`card-featured ${isHovered ? 'hovered' : null}`}  >
      <Link to="/">
        {props.today ? (
          <span className="card-featured__today">Posted today</span>
        ) : (
          <span></span>
        )}
        {isHovered ? <div className="fake-image"><img src={props.image} /></div> :null}
        <div className="card-featured__image">
          <img onMouseOver={hoverImage} onMouseLeave={hoverImage} src={props.image} />
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
