import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Servers from "./components/Servers";
import AllFeatures from "./components/AllFeatures";
import Plans from "./components/Plans";
import BestServer from "./components/BestServer";
import WhyYouUseOurServices from "./components/WhyYouUseOurServices";
import { useTranslation } from 'react-i18next';
function App() {
  const { t,i18n  } = useTranslation();
  const chgLanuage = () => {
    i18n.changeLanguage("en")
  }
  return (
    <>
      <Header chgLanuage={chgLanuage} />
      <BestServer />
      <Features />
      <WhyYouUseOurServices />
      <AllFeatures />
      <Plans />
      {/* <Servers /> */}
      <Footer />
      {t('hello')}
    </>
  );
}

export default App;
