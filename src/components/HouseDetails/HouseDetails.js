import "./HouseDetails.css";
import bed from "./icons/bed.svg";
import bath from "./icons/bath.svg";

function HouseDetails(props) {
  return (
    <div>
      <div className="house-details">
        <img src={bed} />
        <span>{props.nrBed} Bed</span>
        <img src={bath} />
        <span>{props.nrBath} Baths</span>
        <span>{props.size} sq. ft.</span>
      </div>
      <div className="house-details__location">
        <p>{props.location}</p>
      </div>
    </div>
  );
}

export default HouseDetails;
