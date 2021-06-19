import './Heading.css';


function Heading(props) {
  return (
    <h2 className="heading">   
     {props.title}
    </h2>
  );
}

export default Heading;