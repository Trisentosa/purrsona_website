import "../stylesheets/Banner.css";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import BannerButton from "./Buttons/BannerButton";

const catA = require("../images/cat_a.jpg");
const catB = require("../images/cat_b.jpg");
const catC = require("../images/cat_c.jpg");

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      fade
      controls={false}
      interval="3500"
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img className="banner-img" src={catA} alt="First slide" />
        <Carousel.Caption>
          <BannerButton />
          <p>
            Photo by{" "}
            <a
              className="link-text-white"
              href="https://unsplash.com/@luku_muffin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Luku Muffin
            </a>{" "}
            on{" "}
            <a
              className="link-text-white"
              href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="banner-img" src={catB} alt="Second slide" />
        <Carousel.Caption>
          <BannerButton />
          <p>
            Photo by{" "}
            <a
              className="link-text-white"
              href="https://unsplash.com/@dimhou?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Dim Hou
            </a>{" "}
            on{" "}
            <a
              className="link-text-white"
              href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="banner-img" src={catC} alt="Third slide" />

        <Carousel.Caption>
          <BannerButton />
          <p>
            Photo by{" "}
            <a
              className="link-text-white"
              href="https://unsplash.com/@calypso999?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Raul Varzar
            </a>{" "}
            on{" "}
            <a
              className="link-text-white"
              href="https://unsplash.com/photos/e1u0YdAkh9k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Banner;
