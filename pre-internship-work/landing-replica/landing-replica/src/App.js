import "./App.css";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import MainBanner from "./Components/MainBanner/MainBanner";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Ready from "./Components/Ready/Ready";
import Servedindustries from "./Components/ServedIndustries/Servedindustries";
import Stats from "./Components/Stats/Stats";
import StepsBanner from "./Components/StepsBanner/StepsBanner";
import Subscribe from "./Components/Subscribe/Subscribe";
import TrustedBy from "./Components/TrustedBy/TrustedBy";
import About from "./Components/About/About";
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainBanner />
      <Stats />
      <StepsBanner />
      <Products />
      <TrustedBy />
      <Ready />
      <HowItWorks />
      <Servedindustries />
      <Subscribe />
      <About />
    </div>
  );
}

export default App;
