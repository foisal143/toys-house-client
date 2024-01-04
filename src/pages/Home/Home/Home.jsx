import HeroSection from '../HeroSection/HeroSection';
import Gallary from '../Gallary/Gallary';
import Shipping from '../Shipping/Shipping';

import 'aos/dist/aos.css';
import CategoryToys from '../CategoryToys/CategoryToys';
import About from '../About/About';
import UseTitle from '../../../Title/Title';
const Home = () => {
  UseTitle('');
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
      <Shipping></Shipping>
      <Gallary></Gallary>
      <CategoryToys></CategoryToys>
    </div>
  );
};

export default Home;
