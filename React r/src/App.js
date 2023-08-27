import React from "react";
import Header from "./componnents/header/header";
import Hero from "./componnents/hero/hero";
import Slider from "./componnents/slider/slider";
import Virtual from "./componnents/virtual/virtual";
import Products from "./componnents/products/products";
import Testimonial from "./componnents/testimonial/testimonial";
import Footer from "./componnents/footer/footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonial />
      <Footer />
    </div>
  );
}
