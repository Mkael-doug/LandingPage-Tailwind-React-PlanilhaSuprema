import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Benefits } from './components/sections/Benefits';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <ProductShowcase />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
