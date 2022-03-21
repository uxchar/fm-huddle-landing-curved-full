import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer_container">
      <img src="./assets/images/logo-white.svg" className="footer_logo" />
      <p className="footer_txt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
        quam, hendrerit lacinia vestibulum a, ultrices quis sem.
      </p>
      <div className="contact_container">
        <img className="footer_icon" src="./assets/images/icon-phone.svg" />
        <p className="phone"> Phone: +1-543-123-4567</p>
        <br></br>
        <img className="footer_icon" src="./assets/images/icon-email.svg" />
        <p className="email">example@huddle.com</p>
      </div>
      <div className="social_icons">
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebookSquare} className="sm_icon" />
        </a>
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} className="sm_icon" />
        </a>
        <a href="https://www.twitter.com/">
          <FontAwesomeIcon icon={faTwitterSquare} className="sm_icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
