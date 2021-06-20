import "./SellingBuying.css";
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
      </div>
    </article>
  );
}

export default SellingBuying;
