import "../stylesheets/HomePanel.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

const HomePanel = ({ changeNavBg }) => {
  useEffect(() => {
    changeNavBg();
  }, []);
  return (
    <div>
      <Banner />
      <Container className="my-5">
        <span className="panel-header mb-5"> About</span>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, enim
          similique cum natus totam ut voluptatum et harum doloribus quisquam
          aperiam assumenda. Reiciendis tempore natus placeat ut iure, odio
          consequuntur. lorem Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsum, placeat veniam, magni, nisi mollitia quo libero numquam
          voluptas accusantium pariatur soluta ad veritatis! Quam, atque
          laudantium nisi laborum deserunt eligendi.
        </p>
        <button className="panel-btn mb-5 centered-label">
          <Link to="/about" className="panel-text">
            Learn More <IoIosArrowDroprightCircle className="icon" />
          </Link>
        </button>
        <span className="panel-header mb-5">Products</span>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, enim
          similique cum natus totam ut voluptatum et harum doloribus quisquam
          aperiam assumenda. Reiciendis tempore natus placeat ut iure, odio
          consequuntur. lorem Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsum, placeat veniam, magni, nisi mollitia quo libero numquam
          voluptas accusantium pariatur soluta ad veritatis! Quam, atque
          laudantium nisi laborum deserunt eligendi.
        </p>
        <button className="panel-btn mb-5 centered-label">
          <Link to="/product" className="panel-text">
            View All Products <IoIosArrowDroprightCircle className="icon" />
          </Link>
        </button>

        <span id="contact" className="panel-header mb-5">
          Contact Us
        </span>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, enim
          similique cum natus totam ut voluptatum et harum doloribus quisquam
          aperiam assumenda. Reiciendis tempore natus placeat ut iure, odio
          consequuntur. lorem Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsum, placeat veniam, magni, nisi mollitia quo libero numquam
          voluptas accusantium pariatur soluta ad veritatis! Quam, atque
          laudantium nisi laborum deserunt eligendi.
        </p>
      </Container>
    </div>
  );
};
export default HomePanel;
