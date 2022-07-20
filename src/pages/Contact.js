import "../stylesheets/PageComponents.css";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = ({ changeNavBg }) => {
  useEffect(() => {
    changeNavBg();
  }, [changeNavBg]);
  return (
    <Container className="panel-container">
      <div className="home-card-margin">
        <div className="text-center">
          <span className="panel-header">Contact Us</span>
        </div>

        <div className="contact-box">
          <a
            href="https://wa.me/6287758669597"
            className="contact-link"
            target="blank"
          >
            <FaWhatsapp className="contact-icon" /> +62 877-5866-9597
          </a>
        </div>

        <div className="contact-box">
          <a
            href="mailto:triatlas.altana@gmail.com"
            className="contact-link"
            target="blank"
          >
            <AiOutlineMail className="contact-icon" /> triatlas.altana@gmail.com
          </a>
        </div>
      </div>
    </Container>
  );
};
export default Contact;
