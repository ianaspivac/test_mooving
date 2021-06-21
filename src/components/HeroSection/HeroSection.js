import "./HeroSection.css";
import searchIcon from "./search.svg";
import { useState, useEffect } from "react";
import SearchResults from "./SearchResults/SearchResults";
function HeroSection() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultPlace, setSearchResultsPlace] = useState([]);
  const [searchResultAddress, setSearchResultAddress] = useState([]);
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
        const results = fetchData.filter((house) =>
          house.place.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm != ""
        );
        setSearchResultsPlace(results);
        const results2 = fetchData.filter((house) =>
          house.address.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm != ""
        );
        setSearchResultAddress(results2);
      });
  };

  const handlerSearch = (event) => {
    setSearchTerm(event.target.value);
  };

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
          </div>
          {searchResultPlace.length > 0 || searchResultAddress.length > 0 ? <SearchResults searchResultPlace={searchResultPlace} searchResultAddress={searchResultAddress} /> : null}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
