import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Family from './components/sections/Family';
import PreferredPartner from './components/sections/PreferredPartner';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Family />
      <PreferredPartner />
      <Gallery />
      <Contact />
    </Layout>
  );
}

export default App;