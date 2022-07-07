import "../stylesheets/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const shopeeLogo = require("../images/shopee_logo.png");
const shopeeLink =
  "https://shopee.co.id/Purrsona-Premium-Tofu-Cat-Litter-Pasir-kucing-Gumpal-Soya-i.77209690.12147657989";
const tokpedLogo = require("../images/tokopedia_logo.png");
const tokpedLink =
  "https://www.tokopedia.com/purrsona?_branch_match_id=970733344898910722&utm_source=sellerchannel&utm_campaign=Shop-0-12386305-0&utm_medium=share&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvWLygtKirOz0sEADBFL2kfAAAA";
const Footer = () => {
  return (
    <div className="footer-main pt-3">
      <div className="footer-layout mb-3">
        <div>
          <ul>Company</ul>
          <li>
            <Link to="/about" className="link-text">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="link-text">
              Community
            </Link>
          </li>
          <li>
            <Link to="/product" className="link-text">
              Products
            </Link>
          </li>
          <li>
            <Link to="" className="link-text">
              FAQs
            </Link>
          </li>
        </div>
        <div>
          <ul>Shop</ul>
          <a href={tokpedLink} className="me-3" target="blank">
            <img src={tokpedLogo} alt="" className="brand pb-2" />
          </a>
          <a href={shopeeLink} target="blank">
            <img src={shopeeLogo} alt="" className="brand" />
          </a>
        </div>
        <div>
          <ul>Social Media</ul>
          <a href="https://instagram.com/purrsona_id/" target="blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
      <div className="pb-5 copyright">Purrsona &copy;2019</div>
    </div>
  );
};

export default Footer;
