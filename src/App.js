import "./App.css";
import Header from "./components/Header/Header";
import ActionsProperty from "./components/ActionsProperty/ActionsProperty";
import FeaturedProperties from "./components/FeaturedProperties/FeaturedProperties";
import Reviews from "./Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import { ToastProvider } from "react-toast-notifications";
import HeroSection from "./components/HeroSection/HeroSection";
import Marquee from "react-fast-marquee";
function App() {
  return (
    <div className="App">
      <ToastProvider placement="bottom-right" autoDismiss="true">
        <Header />
        <HeroSection />
        <ActionsProperty />
        <Marquee className="marque" speed={40} gradient={false}>
          BE PART OF THE REVOLUTION ON MOOVING BE PART OF THE REVOLUTION ON
          MOOVINGBE PART OF THE REVOLUTION ON MOOVING BE PART OF THE REVOLUTION
          ON MOOVING
        </Marquee>
        <FeaturedProperties />
        <Reviews />
        <Footer />
      </ToastProvider>
    </div>
  );
}

export default App;
