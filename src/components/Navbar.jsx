import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [open]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-slate-900 text-lg">
            <span className="inline-block rounded bg-gradient-to-r from-blue-600 to-indigo-600 px-2 py-1 text-white mr-2">VT</span>
            <span className="align-middle">Venkateswara Tiles & Sanitary</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-blue-700 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white shadow hover:shadow-lg transition-shadow">Get Quote</a>
          </div>

          <button aria-label="Open menu" className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex h-16 items-center justify-between px-4">
            <span className="font-semibold">Venkateswara Tiles & Sanitary</span>
            <button aria-label="Close menu" className="p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-lg text-slate-800 py-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white shadow">
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
