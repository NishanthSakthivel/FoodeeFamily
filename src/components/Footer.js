import React from 'react';
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
      <div className="mt-4">
        {/* <h1>Hello</h1> */}
        <h4>Follow us On</h4>
        <p className="social-container ms-3">
          <a
            href="https://www.facebook.com/FoodieFamily99/"
            className="facebook social"
          >
            <FontAwesomeIcon
              className="footer_icon"
              icon={faFacebook}
              size="2x"
            />
          </a>
          <a
            href="https://www.instagram.com/foodiefamily99?r=nametag"
            className="instagram social ms-3"
          >
            <FontAwesomeIcon
              className="footer_icon"
              icon={faInstagram}
              size="2x"
            />
          </a>
          <a
            href="https://twitter.com/foodiefamily99?s=09"
            className="twitter social ms-3"
          >
            <FontAwesomeIcon
              className="footer_icon"
              icon={faTwitter}
              size="2x"
            />
          </a>
          <a href="https://wwww.twitter.com" className="twitter social ms-3">
            <FontAwesomeIcon
              className="footer_icon"
              icon={faTelegram}
              size="2x"
            />
          </a>
        </p>
      </div>
    );
};

export default Footer;