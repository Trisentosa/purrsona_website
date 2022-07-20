import "../stylesheets/PageComponents.css";
import { Container } from "react-bootstrap";
import "../stylesheets/ProductPanel.css";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { MdPets } from "react-icons/md";

// Products Info
const tofuCatLitterImg = require("../images/product_1.png");
const tofuCatLitterName = "Purrsona Premium Tofu Cat Litter ";
const tofuCatLitterDesc = "<Deskripsi Product>";
const tofuCatLitterLink =
  "https://www.tokopedia.com/purrsona/purrsona-premium-tofu-cat-litter-pasir-kucing-gumpal-soya-kopi";

const bentoniteCatLitterImg = require("../images/bentonite_cat_litter.jpg");
const bentoniteCatLitterName = "Purrsona Premium Bentonite Cat Litter ";
const bentoniteCatLitterDesc = "<Deskirpsi Product>";
const bentoniteCatLitterLink =
  "https://www.tokopedia.com/purrsona/pasir-kucing-10-l-purrsona-premium-cat-litter-kuning";

const Product = ({ changeNavBg }) => {
  useEffect(() => {
    changeNavBg();
  }, [changeNavBg]);
  return (
    <Container className="panel-container">
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
    </Container>
  );
};
export default Product;
