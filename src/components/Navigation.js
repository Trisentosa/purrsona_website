import "../stylesheets/Navigation.css";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { useMediaQuery } from "react-responsive";

const logo = require("../images/purrsona_logo.png");
const tokpedLink = "https://www.tokopedia.com/purrsona";
const shopeeLink = "";
const Navigation = ({ navStyle }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isScreen = useMediaQuery({ query: "(min-width: 769px)" });
  return (
    <Navbar expand="md" fixed="top" className={navStyle}>
      <Container>
        {isTabletOrMobile && (
          <>
            <Navbar.Brand as={Link} to="/" className="nav-brand">
              Purrsona
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
          </>
        )}
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            <NavDropdown
              title="Shops"
              id="navbarScrollingDropdown"
              className="me-4 nav-txt"
            >
              <NavDropdown.Item href={tokpedLink} target="blank">
                Tokopedia
              </NavDropdown.Item>
              <NavDropdown.Item href={shopeeLink} target="blank">
                Shopee
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/product" className="me-4 nav-txt">
              Products
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {isScreen && (
          <>
            <Navbar.Brand as={Link} to="/" className="nav-brand">
              Purrsona
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
          </>
        )}

        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/about" className="me-4 nav-txt">
              About
            </Nav.Link>
            <Nav.Link as={HashLink} to="/contact" className="me-4 nav-txt">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
