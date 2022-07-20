import { AiOutlineShoppingCart } from "react-icons/ai";

const tokpedLink = "https://www.tokopedia.com/purrsona";

const BannerButton = () => {
  return (
    <button className="banner-btn">
      <a className="link-text-white" href={tokpedLink} target="blank">
        Buy Now <AiOutlineShoppingCart className="icon-cart" />
      </a>
    </button>
  );
};

export default BannerButton;
