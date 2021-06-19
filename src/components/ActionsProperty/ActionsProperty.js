import sell from './sell.svg';
import buy from './buy.svg';
import "./ActionsProperty.css";
import SellingBuying from "../SellingBuying/SellingBuying";
import  {BrowserRouter as Router,Link} from 'react-router-dom'

function ActionsProperty() {
  const dataSelling = {
    header: "Selling a Property",
    text:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    buttonText: "Call to action",
  };
  return (
    <div className="actions-property">
      <div className="actions-property__selection">
          <div className="actions-property__sell">
              <img src={sell}/>
              <Link to="/">Selling a property</Link>
          </div>
          <div className="actions-property__buy">
          <img src={buy}/>
          <Link to="/">Buying a property</Link>
          </div>
      </div>
      <SellingBuying header={ dataSelling.header} text={dataSelling.text} buttonText={dataSelling.buttonText} />
    </div>
  );
}

export default ActionsProperty;
