import "./CardReviews.css";
import HouseDetails from "../components/HouseDetails/HouseDetails";
import filledStar from "./icons/filled-star.svg";
import emptyStar from "./icons/empty-star.svg";

function CardReviews(props) {
  const starsRating = [];
  for (let i = 0; i < props.rating; i++) {
    starsRating.push(filledStar);
  }
  for (let i = 0; i < 5 - props.rating; i++) {
    starsRating.push(emptyStar);
  }

  return (
    <article className="card-reviews">
      <div className="card-reviews__rating">
        <div>{props.rating}</div>
        {starsRating.map((star) => (
          <img src={star} />
        ))}
      </div>
      <p className="card-reviews__feedback">{props.feedback}</p>
      <div className="card-reviews__buyer-info">
        <p>{props.buyerInfo}</p>
        <HouseDetails
          nrBed={props.nrBed}
          nrBath={props.nrBath}
          size={props.size}
          location={props.location}
        />
      </div>
    </article>
  );
}

export default CardReviews;
