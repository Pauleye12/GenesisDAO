import Navbar from "./Components/Navbar/Navbar";
import "./App.scss";
import HeroSection from "./Components/Herosection/HeroSection";
import TradingLive from "./Components/TradingLive/TradingLive";
import Tokenomics from "./Components/Tokenomics/Tokenomics";
import Integration from "./Components/Integration/Integration";
import Faq from "./Components/FAQ/Faq";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <TradingLive />
      <Tokenomics />
      <Integration />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
