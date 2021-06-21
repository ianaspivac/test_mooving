import sell from './sell.svg';
import buy from './buy.svg';
import "./ActionsProperty.css";
import SellingBuying from "../SellingBuying/SellingBuying";
import  {BrowserRouter as Router,Link} from 'react-router-dom'
import {useState} from 'react';

function ActionsProperty() {
  const dataSelling = {
    header: "Selling a Property",
    text:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Velit officia aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    buttonText: "Call to action",
  };
  const dataBuying= {
    header: "Buying a Property",
    text:
      " Velit officia aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
    buttonText: "Call to action",
  };
  const [actionType,setActionType]=useState(dataSelling);
  const [isSell,setIsSell]=useState(true);
  const sellAction=()=>{
    setActionType(dataSelling);
    setIsSell(true);
  };
  const buyAction=()=>{
    setActionType(dataBuying);
    setIsSell(false);
  };
  return (
    <div className="actions-property">
      
      <div className="actions-property__selection">
          <div className={`actions-property__sell ${isSell ? 'active-text' : null}`}>
              <img className={isSell ? 'active-image' : 'actions-property__selection__img'} src={sell}/>
              <Link to="/" onClick={sellAction}>Selling a property</Link>
          </div>
          <div className={`actions-property__buy ${!isSell ? 'active-text' : null}`}>
          <img className={!isSell ? 'active-image' : 'actions-property__selection__img'} src={buy}/>
          <Link to="/" onClick={buyAction}>Buying a property</Link>
          </div>
      </div>
   <div className="actions-property__content">
      <SellingBuying header={ actionType.header} text={actionType.text} buttonText={actionType.buttonText} />
     
      <div className="actions-property__video">
      <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/J4_rLK7F4fw`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
      </div>
      </div>
    </div>
  );
}

export default ActionsProperty;
