import "./SellingBuying.css";
import  {BrowserRouter as Router,Link} from 'react-router-dom'
import Button from "../Button/Button";
import Heading from "../Heading/Heading";

function SellingBuying(props) {
  return (
    <article>
      <div className="actions-property__description">
        <div className="actions-property__details">
        <Heading title={props.header}/>
        <p>{props.text}</p>
        <div><Button text="Call to action"></Button></div>
        </div>
        <div className="actions-property__video"></div>
      </div>
    </article>
  );
}

export default SellingBuying;
