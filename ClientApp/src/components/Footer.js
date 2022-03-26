import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.facebook.com/wearejourneyantrim" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </a>
        <a href="https://www.instagram.com/journey_community" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
       </a>
      </div>
      <p>Seek First His Kingdom</p>
      <p>Journey Equip 2022</p>
    </div>
  );
}

export default Footer;
