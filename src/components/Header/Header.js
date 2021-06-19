import './Header.css';
import logo from './Logo.svg'
function Header() {
  return (
    <div className="header">
        <div className="header__container">
     <div className="header__logo">
         <img src={logo} alt="logo"/>
     </div>
     <div className="header__links">
         <ul>
             <li>Market data</li>
             <li>Latest property news</li>
             <li>Pricing</li>
             <li>FAQ</li>
         </ul>
     </div>
     <div className="header__actions">
         <button className="header__authorization">Sign in</button>
         <button className="header__sell">Sell</button>
     </div>
     </div>
    </div>
  );
}

export default Header;