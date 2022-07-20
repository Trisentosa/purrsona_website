import "../stylesheets/PageComponents.css";
import { Container, Carousel, Card, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { GrDiamond } from "react-icons/gr";
import { AiFillEye, AiFillStar } from "react-icons/ai";

const About = ({ changeNavBg }) => {
  useEffect(() => {
    changeNavBg();
  }, [changeNavBg]);
  const stars = (
    <>
      {" "}
      <AiFillStar className="star" /> <AiFillStar className="star" />{" "}
      <AiFillStar className="star" /> <AiFillStar className="star" />
      <AiFillStar className="star" />
    </>
  );
  return (
    <Container className="panel-container">
      <Card className="mx-auto borderless-card home-card-margin px-5">
        <Card.Body>
          <div className="text-center mb-r">
            <span className="panel-header">About Us</span>
          </div>
          <p className="my-3 text-center panel-text">
            Selamat Datang di Purrsona! Purrsona adalah tempat dimana anda akan
            menemukan produk yang akan membuat anda dan kucing kalian tinggal
            lebih nyaman. Purrsona mempunyai berbagai produk yang tidak hanya
            tinggi di kualitas, tetapi juga aman bagi kucing anda. Tidak hanya
            itu, produk kami juga akan mempermudah hidup anda dengan akses mudah
            untuk membersihkan lingkungan anda.
          </p>
        </Card.Body>
      </Card>

      <div className="home-card-margin">
        <div className="text-center mb-4">
          <span className="panel-header">Store Review</span>
        </div>
        <Carousel className="review-carousel" indicators={false}>
          <Carousel.Item>
            <div className="review-div-text">
              <h4 className="mt-3">4.9/5.0 Store Review on Tokopedia</h4>
              {stars}
              <h5 className="mt-5">- As of 2022 -</h5>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="review-div-text">
              <h4 className="mt-3">4.9/5.0 Store Review on Shopee</h4>
              {stars}
              <h5 className="mt-5">- As of 2022 -</h5>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <Card className="mx-auto borderless-card home-card-margin">
        <Row>
          <Col md={6} className="vision text-center">
            <Card.Body>
              <h4 className="mb-4">Vision</h4>
              <AiFillEye className="vNm-logo" />
              <p className="my-3 panel-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                alias commodi minus dolorem velit aut reiciendis veritatis, quae
                dolorum nulla voluptatum dignissimos porro dolores .
              </p>
            </Card.Body>
          </Col>
          <Col md={6} className="mission text-center">
            <Card.Body>
              <h4 className="mb-4">Mission</h4>
              <GrDiamond className="vNm-logo" />
              <p className="my-3 panel-text">
                <li className="mb-3">
                  1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className="mb-3">
                  2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li className="mb-3">
                  3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </p>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};
export default About;
