import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/Menu';
import CateringCTA from './components/CateringCTA';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Hours from './components/Hours';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

import { ReactLenis } from 'lenis/react';

function App() {
  return (
    <ReactLenis root>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <CateringCTA />
        <Gallery />
        <Testimonials />
        <Hours />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;
