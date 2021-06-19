import "./Button.css";
import  {BrowserRouter as Router,Link} from 'react-router-dom'

function Button(props) {
  return (
    <div className="button">
      <Link to="/">{props.text}</Link>
    </div>
  );
}

export default Button;