import "./SearchResults.css";
import OneResult from "../OneResult/OneResult";

function SearchResults(props) {
  console.log(props.searchResultPlace);

  return (
    <div className="search-results">
      {props.searchResultPlace.length > 0 && (
        <div className="search-results-type">Places</div>
      )}
      {props.searchResultPlace.length > 0 &&
        props.searchResultPlace.map((house) => (
          <OneResult location={house.location} placeAddress={house.place} />
        ))}
      {props.searchResultPlace.length > 0 && (
        <hr className="search-results__delimiter" />
      )}
      {props.searchResultAddress.length > 0 && (
        <div className="search-results-type">Addresses</div>
      )}
      {props.searchResultAddress.length > 0 &&
        props.searchResultAddress.map((house) => (
          <OneResult location={house.location} placeAddress={house.address} />
        ))}
    </div>
  );
}

export default SearchResults;
