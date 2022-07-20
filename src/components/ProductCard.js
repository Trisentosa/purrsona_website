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
        <Col md={7} className="text-center my-auto">
          <Card.Body>
            <h4 className="card-title">{product_name}</h4>
            <h6 className="card-text">Description:</h6>
            <p className="card-text">{product_desc}</p>
            <button className="panel-btn my-4 mx-auto">
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
