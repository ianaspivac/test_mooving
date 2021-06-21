import "./Header.css";
import logo from "./Logo.svg";
import cross from "./cross.svg"
import hamburger from "./hamburger.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";
function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const menuVisible = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <div className="header">
      <div className={`header__container ${isMenuVisible ? 'header-menu': null}`}>
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={`header__open-menu ${isMenuVisible ? 'hidden': null}`}>
          <Link to="/" onClick={menuVisible}>
            <img src={hamburger}></img>
            <div>Menu</div>
          </Link>
        </div>
        <div className={`header__close-menu ${!isMenuVisible ? 'hidden': null}`}>
          <Link to="/" onClick={menuVisible}>
            <img src={cross}></img>
            <div>Close</div>
          </Link>
        </div>
        <nav className={`header__links ${isMenuVisible ? 'menu-visible': null}`}>
          <ul>
            <li>
              {" "}
              <Link to="/">Market data</Link>
            </li>
            <li>
              {" "}
              <Link to="/">Latest property news</Link>
            </li>
            <li>
              {" "}
              <Link to="/">Pricing</Link>
            </li>
            <li>
              {" "}
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <div className="header__actions">
            <Link to="/" className="header__authorization">
            Sign in
          </Link>
          </div>
            </li>
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
