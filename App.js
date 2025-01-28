import React from "react";
import MyNavbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ThreeColumnSection from "./components/ThreeColumnSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <HeroSection />
      <ThreeColumnSection />
      <Footer />
    </div>
  );
};

export default App;
