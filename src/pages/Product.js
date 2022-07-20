import "../stylesheets/PageComponents.css";
import { Container } from "react-bootstrap";
import "../stylesheets/ProductPanel.css";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { MdPets } from "react-icons/md";

// Products Info
const tofuCatLitterImg = require("../images/product_1.png");
const tofuCatLitterName = "Purrsona Premium Tofu Cat Litter ";
const tofuCatLitterDesc =
  "Tofu Cat Litter Purrsona terjamin kualitasnya, tidak berdebu, aman dikonsumsi kucing, dan apartment friendly juga yang bisa langsung di flush juga loh! Praktis banget deh, langsung menggumpal!";
const tofuCatLitterLink =
  "https://www.tokopedia.com/purrsona/purrsona-premium-tofu-cat-litter-pasir-kucing-gumpal-soya-kopi";

const bentoniteCatLitterImg = require("../images/bentonite_cat_litter.jpg");
const bentoniteCatLitterName = "Purrsona Premium Bentonite Cat Litter ";
const bentoniteCatLitterDesc =
  "Dengan 3 aroma yang berbeda, Purrsona Bentonite Cat Litter yang anti-debu, cocok untuk kucing anda yang sensitif, dan juga mempunyai fitur hard clumping, membuat proses pembersihan cat litter anda jauh lebih mudah!";
const bentoniteCatLitterLink =
  "https://www.tokopedia.com/purrsona/pasir-kucing-10-l-purrsona-premium-cat-litter-kuning";

const Product = ({ changeNavBg }) => {
  useEffect(() => {
    changeNavBg();
  }, [changeNavBg]);
  return (
    <Container className="panel-container">
      <div className="home-card-margin">
        <div className="text-center">
          <span className="panel-header">
            <MdPets className="me-2 icon-paw" />
            Products
            <MdPets className="ms-2 icon-paw" />
          </span>
        </div>
        <ProductCard
          product_img={tofuCatLitterImg}
          product_name={tofuCatLitterName}
          product_desc={tofuCatLitterDesc}
          product_link={tofuCatLitterLink}
        />

        <ProductCard
          product_img={bentoniteCatLitterImg}
          product_name={bentoniteCatLitterName}
          product_desc={bentoniteCatLitterDesc}
          product_link={bentoniteCatLitterLink}
        />
      </div>
    </Container>
  );
};
export default Product;
