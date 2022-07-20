import "../stylesheets/HomePanel.css";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

const About = ({ changeNavBg }) => {
  useEffect(() => {
    changeNavBg();
  }, [changeNavBg]);
  return (
    <Container className="panel-container">
      <span className="panel-header"> About</span>
      <p className="my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, enim
        similique cum natus totam ut voluptatum et harum doloribus quisquam
        aperiam assumenda. Reiciendis tempore natus placeat ut iure, odio
        consequuntur. lorem Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ipsum, placeat veniam, magni, nisi mollitia quo libero numquam
        voluptas accusantium pariatur soluta ad veritatis! Quam, atque
        laudantium nisi laborum deserunt eligendi.
      </p>
      <span className="panel-header"> History</span>
      <p className="my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, enim
        similique cum natus totam ut voluptatum et harum doloribus quisquam
        aperiam assumenda. Reiciendis tempore natus placeat ut iure, odio
        consequuntur. lorem Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ipsum, placeat veniam, magni, nisi mollitia quo libero numquam
        voluptas accusantium pariatur soluta ad veritatis! Quam, atque
        laudantium nisi laborum deserunt eligendi.
      </p>
      <span className="panel-header"> Review</span>
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
  );
};
export default About;
