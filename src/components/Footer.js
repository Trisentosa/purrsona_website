import "../stylesheets/Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Card, Row, Col } from "react-bootstrap";

const shopeeLogo = require("../images/shopee_logo.png");
const shopeeLink =
  "https://shopee.co.id/pawpal?categoryId=100631&itemId=12147657989";
const tokpedLogo = require("../images/tokopedia_logo.png");
const tokpedLink = "https://www.tokopedia.com/purrsona";
const Footer = () => {
  return (
    <div className="footer pt-3">
      <Card className="mx-auto borderless-card footer-card">
        <Row className="row g-1 text-center">
          <Col md={3} className="mb-5">
            <ul>Company</ul>
            <li className="mb-1">
              <Link to="/about" className="footer-link">
                About
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/product" className="footer-link">
                Products
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </li>
          </Col>
          <Col md={3} className="mb-5">
            <ul>Contact Info</ul>
            <li>
              <a
                href="https://wa.me/6287758669597"
                className="me-3 link-text"
                target="blank"
              >
                <FaWhatsapp className="brand-small" />: +62 877-5866-9597
              </a>
            </li>
            <li>
              <a
                href="mailto:triatlas.altana@gmail.com"
                className="me-3 link-text"
                target="blank"
              >
                <AiOutlineMail className="brand-small" />:
                triatlas.altana@gmail.com
              </a>
            </li>
          </Col>
          <Col md={3} className="mb-5">
            <div>
              <ul>Shop</ul>
              <a href={tokpedLink} className="me-3" target="blank">
                <img src={tokpedLogo} alt="" className="brand pb-2" />
              </a>
              <a href={shopeeLink} target="blank">
                <img src={shopeeLogo} alt="" className="brand" />
              </a>
            </div>
          </Col>
          <Col md={3} className="mb-5">
            <div>
              <ul>Social Media</ul>
              <a href="https://instagram.com/purrsona_id/" target="blank">
                <FaInstagram className="brand" />
              </a>
            </div>
          </Col>
        </Row>
      </Card>
      <div className="pb-5 copyright">Purrsona &copy;2019</div>
    </div>
  );
};

export default Footer;
