import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Testimonials from '../Testimonials';
import Badges from '../Badges';
import Email from '../Email';



function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Testimonials />
      <Badges />
      <Email />
      <Footer />
    </>
  );
}

export default Home;
