import { motion } from 'framer-motion';
import { Phone, User, MapPin, Facebook, Instagram, MessageCircle, ExternalLink, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
    e.currentTarget.reset();
  };

  useEffect(() => {
    const btn = document.getElementById('scrollTop');
    const onScroll = () => {
      if (!btn) return;
      if (window.scrollY > 600) btn.style.opacity = '1';
      else btn.style.opacity = '0';
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-3xl font-bold text-slate-900">Contact Us</h3>
            <p className="mt-3 text-slate-700">We are here to help you choose the right products for your space.</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-slate-900">Phone</p>
                  <a href="tel:+917816087488" className="text-blue-700 hover:underline">+91 7816087488</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-slate-900">Proprietor</p>
                  <p className="text-slate-700">Ganesh Bora</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-slate-900">Address</p>
                  <p className="text-slate-700">Near Edulavalasa Junction, Polaki Mandal, Srikakulam District, Andhra Pradesh - 532421</p>
                  <div className="mt-2">
                    <a
                      href="https://www.google.com/maps?q=Edulavalasa+Junction,+Polaki+Mandal,+Srikakulam+District,+Andhra+Pradesh+532421"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm text-blue-700 hover:border-blue-300 hover:bg-blue-50"
                    >
                      <ExternalLink className="h-4 w-4" /> Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl shadow">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Edulavalasa%20Junction%2C%20Polaki%20Mandal%2C%20Srikakulam%20District%2C%20Andhra%20Pradesh%20532421&z=14&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-blue-700"><Facebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-pink-600"><Instagram /></a>
              <a href="https://wa.me/917816087488" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-green-600"><MessageCircle /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">Send us a message</h4>
              <p className="mt-1 text-slate-600">Our team will get back to you shortly.</p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm text-slate-700">Name</label>
                  <input required type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                </div>
                <div>
                  <label className="block text-sm text-slate-700">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                </div>
                <div>
                  <label className="block text-sm text-slate-700">Message</label>
                  <textarea required rows="4" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                </div>
                <button type="submit" className="w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white shadow hover:shadow-lg transition">
                  Send Message
                </button>
                {sent && (
                  <p className="text-center text-sm text-green-600">Thanks! Your message has been sent.</p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-600">© 2025 Venkateswara Tiles and Sanitary</p>
          <a href="#home" id="scrollTop" className="opacity-0 transition-opacity" aria-label="Scroll to top">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-blue-300 hover:text-blue-700">
              <ArrowUp className="h-4 w-4" /> Top
            </span>
          </a>
        </div>
      </footer>
    </section>
  );
}
