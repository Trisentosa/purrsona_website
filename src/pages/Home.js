import "../stylesheets/PageComponents.css";
import { IoIosArrowDroprightCircle, IoIosLeaf } from "react-icons/io";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

const product_display = require("../images/product_display.jpg");
const product_display2 = require("../images/product_1.png");

const HomePanel = ({ changeNavBg }) => {
  useEffect(() => {
    changeNavBg();
  }, [changeNavBg]);
  return (
    <div>
      <Banner />
      <Container className="mt-5">
        <Card className="mx-auto borderless-card home-card-margin">
          <Row className="row g-4">
            <Col md={5} className="my-auto">
              <Card.Body>
                <div className="text-center mb-4">
                  <span className="panel-header">Purrsona</span>
                </div>
                <p className="my-3 text-center panel-text">
                  Purrsona adalah tempat dimana anda akan menemukan produk yang
                  akan membuat anda dan kucing kalian tinggal lebih nyaman.
                  Purrsona mempunyai berbagai produk yang tidak hanya tinggi di
                  kualitas, tetapi juga aman bagi kucing anda. Tidak hanya itu,
                  produk kami juga akan mempermudah hidup anda dengan akses
                  mudah untuk membersihkan lingkungan anda.
                </p>
                <button className="panel-btn mt-5 centered-label mx-auto">
                  <Link to="/about" className="panel-text">
                    Learn More <IoIosArrowDroprightCircle className="icon" />
                  </Link>
                </button>
              </Card.Body>
            </Col>
            <Col md={7}>
              <img
                src={product_display}
                className="img-fluid"
                alt="product display"
              />
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
                <p className="text-center circle-icon-text">Harga Terjangkau</p>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <FaCheckDouble className="circle-icon mb-3" />
                </div>
                <p className="text-center circle-icon-text">
                  Kualitas Terjamin
                </p>
              </Col>{" "}
              <Col md={4}>
                <div className="text-center">
                  <IoIosLeaf className="circle-icon mb-3" />
                </div>
                <p className="text-center circle-icon-text">Ramah Lingkungan</p>
              </Col>
            </Row>
          </Card>
        </div>

        <Card className="mx-auto borderless-card home-card-margin">
          <Row className="row g-4">
            <Col md={6}>
              <img
                src={product_display2}
                className="img-fluid"
                alt="product display"
              />
            </Col>
            <Col md={6} className="my-auto">
              <Card.Body>
                <div className="text-center mb-4">
                  <span className="panel-header">Our Products</span>
                </div>
                <p className="my-3 text-center panel-text">
                  Purrsona merupakan sebuah gerai dimana kalian bisa menemukan
                  berbagai variasi dari Cat Litter. Purrsona memproduksi Cat
                  Litter dengan kualitas terjamin, yang akan membuat anda, dan
                  kucing anda mempunyai rutinitas yang lebih mudah dan nyaman.
                  Dengan banyak pilihan jenis cat litter sampai juga aromanya,
                  Purrsona Premium Cat Litter akan membawa lingkungan anda
                  menjadi lingkungan yang sempurna tidak hanya bagi anda, tetapi
                  juga kucing kesayangan anda.
                </p>
                <button className="panel-btn centered-label mx-auto mt-5">
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
