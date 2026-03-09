import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header.jsx";
import HeroBanner from "./components/home/Home.jsx";
import ProductCatalog from "./components/product/ProductCatalog.jsx";
import WishlistPage from "./components/cartpage/WishlistPage.jsx";
import CartPage from "./components/cartpage/CartPage.jsx";
import FeaturesPromo from "./components/featurespromo/FeaturesPromo.jsx";
import PopularCategories from "./components/popularCategories/PopularCategories.jsx";
import AboutDealer from "./components/aboutdealer/AboutDealer.jsx";
import PriceAdvantages from "./components/priceadvantages/PriceAdvantages.jsx";
import BlogSection from "./components/blogsection/BlogSection.jsx";
import FAQSection from "./components/faq/FAQSection.jsx";
import Footer from "./components/footer/Footer.jsx";
import ProductDetails from "./components/Product/ProductDetails.jsx";
import Products from './components/product/Products.jsx';

const Home = () => (
  <>
    <HeroBanner />
    <ProductCatalog />
    <Products />
    <FeaturesPromo />
    <PopularCategories />
    <AboutDealer />
    <PriceAdvantages />
    <BlogSection />
    <FAQSection />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
