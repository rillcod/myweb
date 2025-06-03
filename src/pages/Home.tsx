import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Benefits from '../components/Benefits';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Delivery from '../components/Delivery';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Programs />
      <Benefits />
      <Process />
      <Testimonials />
      <Delivery />
      <Contact />
    </div>
  );
};

export default Home;