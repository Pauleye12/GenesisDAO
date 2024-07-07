import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.scss";
import HeroSection from "./Components/Herosection/HeroSection";
import TradingLive from "./Components/TradingLive/TradingLive";
import Tokenomics from "./Components/Tokenomics/Tokenomics";
import Integration from "./Components/Integration/Integration";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <TradingLive />
      <Tokenomics />
      <Integration />
    </div>
  );
};

export default App;
