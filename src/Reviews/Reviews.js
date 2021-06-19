import "./Reviews.css";
import Heading from "../components/Heading/Heading";
import CardReviews from "./CardReviews";

function Reviews() {
  const reviews = [
    {
      rating: "4.0",
      feedback:
        "Moovikng.uk defies all the stereotypes. Platform is reliable, prompt, helpful, thoughtful and professional. A pleasure to work with and I would highly recommend her. A pleasure to work with and I would highly recommend her. ",
      buyerInfo: "Buyer Closed Feb '21  –  $1.28M",
      nrBed: 1,
      nrBath: 2,
      size: "8,380",
      location: "50 E 72nd St, New York, NY 10021",
    },
    {
        rating: "5.0",
        feedback:
          "Moovikng.uk defies all the stereotypes. Platform is reliable, prompt, helpful, thoughtful and professional. A pleasure to work with and I would highly recommend her. A pleasure to work with and I would highly recommend her. ",
        buyerInfo: "Buyer Closed Feb '21  –  $1.28M",
        nrBed: 1,
        nrBath: 2,
        size: "8,380",
        location: "50 E 72nd St, New York, NY 10021",
      },
  ];
  return (
    <div className="reviews">
      <div className="reviews-heading">
        <Heading title="Reviews & Testimonials" />
      </div>
      <ul className="reviews-list">
        {reviews.map((review) => (
          <CardReviews
            rating={review.rating}
            feedback={review.feedback}
            buyerInfo={review.buyerInfo}
            nrBed={review.nrBed}
            nrBath={review.nrBath}
            size={review.size}
            location={review.location}
          />
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
