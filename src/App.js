import React from "react";
import ImgCarousel from "./components/carousel/ImgCarousel";
import About from "./components/about/About";
import Button from "./components/button/buttons";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import TouristicPlaces from "./components/history/TouristicPlaces";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Button />
      <About />

      <TouristicPlaces />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
