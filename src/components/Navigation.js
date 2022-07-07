import "../stylesheets/Navigation.css";
import { Link } from "react-router-dom";
const logo = require("../images/purrsona_logo.png");
const tokpedLink =
  "https://www.tokopedia.com/purrsona?_branch_match_id=970733344898910722&utm_source=sellerchannel&utm_campaign=Shop-0-12386305-0&utm_medium=share&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvWLygtKirOz0sEADBFL2kfAAAA";

const Navigation = ({ navStyle }) => {
  return (
    <div className={navStyle} id="nav-display">
      <a target="blank" href={tokpedLink} className="nav-text nav-text-margin">
        Shop
      </a>
      <Link to="/product" className="nav-text nav-text-margin">
        Products
      </Link>
      <Link to="/" className="nav-text nav-text-margin centered-label ">
        Home
      </Link>
      <Link to="/about" className="nav-text nav-text-margin">
        About
      </Link>
      <a href="/#contact" className="nav-text">
        Contact Us
      </a>
      {/* <div>
        <Link to="/">
          <img src={logo} className="logo-img" />
        </Link>
      </div> */}
      <div className="nav-div"></div>
    </div>
  );
};

export default Navigation;
