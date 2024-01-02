import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Gallary from '../Gallary/Gallary';
import Shipping from '../Shipping/Shipping';

import 'aos/dist/aos.css';
const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Shipping></Shipping>
      <Gallary></Gallary>
    </div>
  );
};

export default Home;
