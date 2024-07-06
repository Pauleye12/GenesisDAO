import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.scss";
import HeroSection from "./Components/Herosection/HeroSection";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
