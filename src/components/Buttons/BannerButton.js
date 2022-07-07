import { AiOutlineShoppingCart } from "react-icons/ai";

const tokpedLink =
  "https://www.tokopedia.com/purrsona?_branch_match_id=970733344898910722&utm_source=sellerchannel&utm_campaign=Shop-0-12386305-0&utm_medium=share&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvWLygtKirOz0sEADBFL2kfAAAA";

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
