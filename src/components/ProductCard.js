import { Card, Row, Col } from "react-bootstrap";
import "../stylesheets/PageComponents.css";

const ProductCard = ({
  product_img,
  product_name,
  product_desc,
  product_link,
}) => {
  return (
    <Card className="mt-5 mb-3 item-display mx-auto">
      <Row className="row g-0">
        <Col md={5}>
          <img
            src={product_img}
            className="img-fluid rounded-start"
            alt="..."
          />
        </Col>
        <Col md={7}>
          <Card.Body>
            <h5 className="card-title">{product_name}</h5>
            <p className="card-text">Description:</p>
            <p className="card-text">{product_desc}</p>
            <button className="panel-btn mb-5 centered-label">
              <a href={product_link} target="blank" className="panel-text">
                Buy Now
              </a>
            </button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
