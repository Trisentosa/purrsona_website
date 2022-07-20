import "../stylesheets/HomePanel.css";
import "../stylesheets/waves.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

const HomePanel = ({ changeNavBg }) => {
  useEffect(() => {
    changeNavBg();
  }, [changeNavBg]);
  return (
    <div>
      <Banner />
      <Container className="mt-5">
        {/* <p className="my-4">
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
      </Container>
      <Container className="mb-5">
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
        </p> */}

        <Card className="mx-auto borderless-card home-card-margin">
          <Row className="row g-4">
            <Col md={5}>
              <Card.Body>
                <div className="text-center mb-4">
                  <span className="panel-header">Purrsona</span>
                </div>
                <p className="my-3 text-center panel-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  alias commodi minus dolorem velit aut reiciendis veritatis,
                  quae dolorum nulla voluptatum dignissimos porro dolores nemo
                  facilis natus cum sequi maiores. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Ullam, blanditiis quod autem
                  eius corporis voluptates in id tenetur repudiandae ex, soluta
                  nobis? Optio fuga quos sint sapiente possimus alias odit.
                </p>
                <button className="panel-btn my-5 centered-label mx-auto">
                  <Link to="/about" className="panel-text">
                    Learn More <IoIosArrowDroprightCircle className="icon" />
                  </Link>
                </button>
              </Card.Body>
            </Col>
            <Col md={7}>
              <iframe
                src="https://www.youtube.com/embed/ALja3wAdQsM"
                allowFullScreen
                className="iframe-yt"
              ></iframe>
            </Col>
          </Row>
        </Card>

        <div className="mb-5">
          <div className="text-center">
            <span className="panel-header">Why Purrsona?</span>
          </div>
          <Card className="mx-auto borderless-card home-card-margin">
            <Row className="row g-1">
              <Col md={4}>
                <div className="text-center">
                  <MdOutlineAttachMoney className="circle-icon mb-3" />
                </div>
                <p className="text-center circle-icon-text">Reliable</p>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <MdOutlineAttachMoney className="circle-icon mb-3" />
                </div>
                <p className="text-center circle-icon-text">Reliable</p>
              </Col>{" "}
              <Col md={4}>
                <div className="text-center">
                  <MdOutlineAttachMoney className="circle-icon mb-3" />
                </div>
                <p className="text-center circle-icon-text">Reliable</p>
              </Col>
            </Row>
          </Card>
        </div>

        <Card className="mx-auto borderless-card home-card-margin">
          <Row className="row g-4">
            <Col md={6}>
              <iframe
                src="https://www.youtube.com/embed/ALja3wAdQsM"
                allowFullScreen
                className="iframe-yt"
              ></iframe>
            </Col>
            <Col md={6}>
              <Card.Body>
                <div className="text-center mb-4">
                  <span className="panel-header">Cat Litter Products</span>
                </div>
                <p className="my-3 text-center panel-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  alias commodi minus dolorem velit aut reiciendis veritatis,
                  quae dolorum nulla voluptatum dignissimos porro dolores nemo
                  facilis natus cum sequi maiores. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Ullam, blanditiis quod autem
                  eius corporis voluptates in id tenetur repudiandae ex, soluta
                  nobis? Optio fuga quos sint sapiente possimus alias odit.
                </p>
                <button className="panel-btn centered-label mx-auto my-5">
                  <Link to="/product" className="panel-text">
                    View All Products{" "}
                    <IoIosArrowDroprightCircle className="icon" />
                  </Link>
                </button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};
export default HomePanel;
