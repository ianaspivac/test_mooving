import "./HeroSection.css";
import searchIcon from "./search.svg";
import { useState, useEffect } from "react";
function HeroSection() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (fetchData) {
        setData(fetchData);
        const results = fetchData.filter(house =>
          house.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
          house.place.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log(results);
      });
  };

  const handlerSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  /*useEffect(() => {
    const results = data.filter(house =>
      house.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);*/
  const showResult = (event) => {
    getData();
  };
  return (
    <div className="hero-section">
      <div className="hero-section__container">
        <div className="hero-section__content">
          <h1>Making moving simple</h1>
          <div className="hero-section__search">
            <input
              className="hero-section__search-field"
              type="text"
              value={searchTerm}
              onChange={handlerSearch}
              placeholder="Enter Address, Neighborhood, City or Post Code..."
            />
            <button
              className="hero-section__search-button"
              onClick={showResult}
            >
              <img src={searchIcon} />
              Search
            </button>
            <ul>
              {searchResults.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
