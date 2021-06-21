import "./Footer.css";
import logo from "./Logo.svg";
import ig from "./icons/instagram.svg";
import tw from "./icons/twitter.svg";
import fb from "./icons/facebook.svg";
import yt from "./icons/youtube.svg";
import li from "./icons/LinkedIn.svg";
import iconGirl from "./icons/icon-girl.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";

function Footer() {
  const [email, setEmail] = useState("");
  const { addToast } = useToasts();
  const handlerEmail = (event) => {
    setEmail(event.target.value);
  };

  const subscription = (event) => {
    event.preventDefault();
    console.log(email);
    setEmail("");
    addToast("Subscribed", { appearance: "info" });
  };
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="footer__social-list">
          <li>
            <Link to="/">
              <img src={ig} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={tw} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={fb} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={yt} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={li} />
            </Link>
          </li>
        </ul>

        <nav className="footer__navigation">
          <ul className="footer__links">
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/">Press</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
            </li>
          </ul>
          <p className="footer__copyright">
            ©2021 Mooving.uk. All rights reserved.
          </p>
        </nav>

        <div className="footer__connection">
          <div className="footer__subscription">
            <h3>Get the latest news</h3>
            <form onSubmit={subscription}>
              <input
                className="footer__subscription__email"
                type="email"
                placeholder="Your email"
                onChange={handlerEmail}
                value={email}
                required
              />
              <input
                className="footer__subscription__subscribe"
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>

        <img className="footer__girl-icon" src={iconGirl} alt="Girl icon" />
      </div>
    </div>
  );
}

export default Footer;
