import "./OneResult.css";

function OneResult(props) {
  
  return (
     <div className="search-results__details">
          <div className="search-results__name">{props.placeAddress}</div>
          <div className="search-results__location">{props.location}</div>
    </div>
  );
}

export default OneResult;