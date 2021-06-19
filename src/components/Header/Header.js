import "./Header.css";
import logo from "./Logo.svg";
import  {BrowserRouter as Router,Link} from 'react-router-dom'
function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
            <Link to="/">
          <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="header__links">
          <ul>
            <li> <Link to="/">Market data</Link></li>
            <li> <Link to="/">Latest property news</Link></li>
            <li> <Link to="/">Pricing</Link></li>
            <li> <Link to="/">FAQ</Link></li>
          </ul>
        </nav>
        <div className="header__actions">
          <Link to="/" className="header__authorization">
            Sign in
          </Link>
          <Link to="/" className="header__sell">
            Sell
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
