import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsGallery from './components/ProductsGallery';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="font-inter text-slate-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <ProductsGallery />
        <Contact />
      </main>
    </div>
  );
}
