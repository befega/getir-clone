import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Categories from "./Components/Categories";
import Campaigns from "./Components/Campaigns";
import Favorites from "./Components/Favorites";
import MobileApp from "./Components/MobileApp";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />
      <div className="container mx-auto grid gap-y-6">
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
