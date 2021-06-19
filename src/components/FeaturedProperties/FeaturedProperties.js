import "./FeaturedProperties.css";
import CardFeatured from "./CardFeatured";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import house1 from "./houses/house1.jpg";
import house2 from "./houses/house2.jpg";
import house3 from "./houses/house3.jpg";
function FeaturedProperties() {
  const featured = [
    {
      image: house1,
      price: "49,900",
      nrBed: 1,
      nrBath: 2,
      size: "8,380",
      location: "50 E 72nd St, New York, NY 10021",
    },
    {
      image: house2,
      price: "521,500",
      nrBed: 1,
      nrBath: 2,
      size: "8,380",
      location: "50 E 72nd St, New York, NY 10021",
    },
    {
      image: house3,
      price: "234,900",
      nrBed: 1,
      nrBath: 2,
      size: "8,380",
      location: "50 E 72nd St, New York, NY 10021",
    },
  ];
  return (
    <article className="featured-properties">
      <div className="featured-properties__heading">
        <Heading title="Featured Properties" />
        <Button text="More Properties" />
      </div>
      <ul className="featured-list">
        {featured.map((house) => (
          <CardFeatured
            image={house.image}
            price={house.price}
            nrBed={house.nrBed}
            nrBath={house.nrBath}
            size={house.size}
            location={house.location}
          />
        ))}
      </ul>
    </article>
  );
}

export default FeaturedProperties;
