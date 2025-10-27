import { motion } from 'framer-motion';

const categories = [
  { title: 'Floor Tiles', img: 'https://images.unsplash.com/photo-1582587806511-266f22f6b1d8?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Wall Tiles', img: 'https://images.unsplash.com/photo-1616137422495-1e9e5f3903ab?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Bathroom Tiles', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Kitchen Tiles', img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d12?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Sanitary Ware', img: 'https://images.unsplash.com/photo-1638959771918-12d1bffbe4a0?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Bathroom Fittings', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop' },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1600566753190-17f0baa2c7c7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1584622781564-1d7a7edca75b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1620288656181-32ad9c51522b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598300184519-b1f7292d3531?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582587806511-266f22f6b1d8?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552324190-9e86fa095c4a?q=80&w=1200&auto=format&fit=crop',
];

import { useState } from 'react';

export default function ProductsGallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="bg-white" id="products">
      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Quality, Style, and Lasting Value</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Venkateswara Tiles and Sanitary offers a curated selection of floor and wall tiles, bathroom fittings, and premium sanitary ware. We bring you trusted brands, modern designs, and expert guidance for homes and commercial spaces across Srikakulam District.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm">Wide Range</span>
              <span className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm">Premium Brands</span>
              <span className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm">Expert Advice</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img src="https://images.unsplash.com/photo-1684220160223-7004fcc50b91?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaWxlcyUyMHNob3dyb29tfGVufDB8MHx8fDE3NjE1ODk0NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Tiles showroom" className="h-80 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 pb-10 sm:pb-16">
        <div className="mb-8 sm:mb-12 text-center">
          <h3 className="text-3xl font-bold text-slate-900">Featured Categories</h3>
          <p className="mt-3 text-slate-600">Explore our most popular categories with contemporary styles and durable finishes.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <img src={c.img} alt={c.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-0 p-4">
                <h4 className="text-white text-lg font-semibold drop-shadow">{c.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-7xl px-6 pb-20 sm:pb-28">
        <div className="mb-8 sm:mb-12 text-center">
          <h3 className="text-3xl font-bold text-slate-900">Inspiration Gallery</h3>
          <p className="mt-3 text-slate-600">Real-world looks and ideas for your next project.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((src, idx) => (
            <motion.button
              type="button"
              key={idx}
              onClick={() => setLightbox(src)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.03 }}
              className="group relative overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img src={src} alt="Gallery" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </div>

        {lightbox && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
            <img src={lightbox} alt="Preview" className="max-h-[80vh] w-auto rounded-xl shadow-2xl" />
          </div>
        )}
      </section>
    </div>
  );
}
