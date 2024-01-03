import HeroSection from '../HeroSection/HeroSection';
import Gallary from '../Gallary/Gallary';
import Shipping from '../Shipping/Shipping';

import 'aos/dist/aos.css';
import CategoryToys from '../CategoryToys/CategoryToys';
const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Shipping></Shipping>
      <Gallary></Gallary>
      <CategoryToys></CategoryToys>
    </div>
  );
};

export default Home;
