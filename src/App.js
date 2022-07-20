import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/Scrollbar.css";
import "./stylesheets/App.css";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ScrollToTop from "./components/Helper/ScrollToTop";

function App() {
  const [navSetting, setNavSetting] = useState("fixed-nav");
  const changeNavBg = () => {
    console.log(window.location.pathname);
    window.scrollY <= 150 &&
    (window.location.pathname === "/" ||
      window.location.pathname === "/purrsona_website/")
      ? setNavSetting("fixed-nav")
      : setNavSetting("sticky-nav");
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <div className="App" onScroll={changeNavBg}>
      <BrowserRouter>
        <ScrollToTop>
          <Navigation navStyle={navSetting} />
          <Routes>
            <Route path="/" element={<Home changeNavBg={changeNavBg} />} />
            <Route
              path="/about"
              element={<About changeNavBg={changeNavBg} />}
            />
            <Route
              path="/product"
              element={<Product changeNavBg={changeNavBg} />}
            />
            <Route path="/*" element={<Home changeNavBg={changeNavBg} />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
