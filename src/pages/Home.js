import HomeHeader from "../components/HomeHeader";
import Banner2 from "../components/Banner2";
import Favorites from "../components/Favorites";
import HomeImage from "../components/HomeImage";
import HeroSec from "../components/HeroSec";
import Carusel1 from "../components/Carusel1";
import Banner3 from "../components/Banner3";
import HeroSec2 from "../components/HeroSec2";
import Carusel2 from "../components/Carusel2";
import ImageCol from "../components/ImageCol";
import HeroSec3 from "../components/HeroSec3";
import EmailSec from "../components/EmailSec";
import Carusel3 from "../components/Carusel3";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Banner2 />
      <Favorites />
      <HomeImage />
      <HeroSec />
      <br />
      <br />
      <Carusel1 />
      <Banner3 />
      <HeroSec2 />
      <Carusel2 />
      <ImageCol />
      <HeroSec3 />
      <Carusel3 />
      <EmailSec />
      <Footer />
    </div>
  );
};
export default Home;
