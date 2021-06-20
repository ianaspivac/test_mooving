import "./Reviews.css";
import React from "react";
import Heading from "../components/Heading/Heading";
import CardReviews from "./CardReviews";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Reviews() {
  const slider = React.useRef(null);

  const reviews = [
    {
      key: Math.floor(Math.random() * 100 + 1),
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
      key: Math.floor(Math.random() * 100 + 1),
      rating: "5.0",
      feedback:
        "Moovikng.uk defies all the stereotypes. Platform is reliable, prompt, helpful, thoughtful and professional. A pleasure to work with and I would highly recommend her. A pleasure to work with and I would highly recommend her. ",
      buyerInfo: "Buyer Closed Feb '21  –  $1.28M",
      nrBed: 1,
      nrBath: 2,
      size: "8,380",
      location: "50 E 72nd St, New York, NY 10021",
    },
    {
      key: Math.floor(Math.random() * 100 + 1),
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
    <article className="reviews">
      <div className="reviews-heading">
        <Heading title="Reviews & Testimonials" />
        <div className="reviews__buttons">
          <button className="reviews__button" onClick={() => slider?.current?.slickPrev()}>
            <img src={leftArrow} />
          </button>
          <button className="reviews__button" onClick={() => slider?.current?.slickNext()}>
            <img src={rightArrow} />
          </button>
        </div>
      </div>
      <div className="reviews-list">
        <Slider
          ref={slider}
          dots={false}
          arrows={false}
          slidesToShow={2}
          slidesToScroll={1}
        >
          {reviews.map((review) => (
            <CardReviews
              rating={review.rating}
              feedback={review.feedback}
              buyerInfo={review.buyerInfo}
              nrBed={review.nrBed}
              nrBath={review.nrBath}
              size={review.size}
              location={review.location}
              key={review.key}
            />
          ))}
        </Slider>
      </div>
    </article>
  );
}

export default Reviews;
