import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = [
  { title: 'Living Room Tiles', img: 'https://images.unsplash.com/photo-1494368308039-ed3393a402a4?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Bedroom Tiles', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Kitchen Backsplash', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Bathroom Tiles', img: 'https://images.unsplash.com/photo-1584622781564-1d7a7edca75b?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Sanitary Ware', img: 'https://images.unsplash.com/photo-1638959771918-12d1bffbe4a0?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Outdoor / Parking', img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop' },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616486886892-1c4777c9c869?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
];

export default function ProductsGallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="bg-white" id="products">
      {/* About - colorful and attractive */}
      <section id="about" className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-rose-600 via-orange-600 to-amber-500 bg-clip-text text-transparent">
                Design Your Dream Home with Vibrant Tiles
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                We curate modern designs, durable finishes, and trusted brands to bring life to bedrooms, kitchens, living rooms, and bathrooms. Explore a colorful range that balances beauty and performance.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-rose-50 text-rose-700 px-3 py-1 text-sm">Ceramic & Vitrified</span>
                <span className="rounded-full bg-orange-50 text-orange-700 px-3 py-1 text-sm">Anti-skid & Parking</span>
                <span className="rounded-full bg-amber-50 text-amber-700 px-3 py-1 text-sm">Premium Sanitary</span>
                <span className="rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-sm">Designer Patterns</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop" alt="Modern living room with tiles" className="h-56 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl mt-6">
                  <img src="https://images.unsplash.com/photo-1758548157243-f4ef3e614684?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHlsaXNoJTIwa2l0Y2hlbiUyMHdpdGglMjBiYWNrc3BsYXNofGVufDB8MHx8fDE3NjE1OTAzMDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Stylish kitchen with backsplash" className="h-56 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 pb-10 sm:pb-16">
        <div className="mb-8 sm:mb-12 text-center">
          <h3 className="text-3xl font-bold text-slate-900">Varieties We Offer</h3>
          <p className="mt-3 text-slate-600">Tiles, sanitary ware, and fittings for every space.</p>
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
          <h3 className="text-3xl font-bold text-slate-900">Real-life Inspiration Gallery</h3>
          <p className="mt-3 text-slate-600">See how tiles transform bedrooms, kitchens, living rooms, and bathrooms.</p>
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
              className="group relative overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
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
