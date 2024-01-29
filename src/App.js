import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Servers from "./components/Servers";
import AllFeatures from "./components/AllFeatures";
import Plans from "./components/Plans";
import BestServer from "./components/BestServer";
import WhyYouUseOurServices from "./components/WhyYouUseOurServices";
function App() {
  return (
    <>
      <Header />
      <BestServer />
      <Features />
      <WhyYouUseOurServices />
      <AllFeatures />
      <Plans />
      {/* <Servers /> */}
      <Footer />
    </>
  );
}

export default App;
