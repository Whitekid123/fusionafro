import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/Menu';
import CateringCTA from './components/CateringCTA';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Hours from './components/Hours';
import Footer from './components/Footer';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
