import { motion } from 'framer-motion';

const brands = [
  { name: 'Ceramic', logo: 'https://images.unsplash.com/photo-1582587806511-266f22f6b1d8?q=80&w=400&auto=format&fit=crop' },
  { name: 'Zonson', logo: 'https://images.unsplash.com/photo-1616137422495-1e9e5f3903ab?q=80&w=400&auto=format&fit=crop' },
  { name: 'Falcon', logo: 'https://images.unsplash.com/photo-1600566753190-17f0baa2c7c7?q=80&w=400&auto=format&fit=crop' },
  { name: 'Kajaria', logo: 'https://images.unsplash.com/photo-1552324190-9e86fa095c4a?q=80&w=400&auto=format&fit=crop' },
  { name: 'Somany', logo: 'https://images.unsplash.com/photo-1598300184519-b1f7292d3531?q=80&w=400&auto=format&fit=crop' },
  { name: 'Hindware', logo: 'https://images.unsplash.com/photo-1638959771918-12d1bffbe4a0?q=80&w=400&auto=format&fit=crop' },
];

export default function Brands() {
  return (
    <section id="brands" className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-slate-900">Brands We Carry</h3>
          <p className="mt-2 text-slate-700">Trusted manufacturers for tiles, sanitary ware, and fittings.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white/80 p-4 backdrop-blur shadow-sm"
            >
              <div className="aspect-[3/2] w-full overflow-hidden rounded-lg">
                <img src={b.logo} alt={b.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition" />
              </div>
              <p className="mt-3 text-center text-sm font-semibold text-slate-800">{b.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
