import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] sm:h-screen w-full overflow-hidden">
      {/* 3D Scene as full-width cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Rich, dark-to-warm overlay that keeps scene interactive */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 via-rose-500/10 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full border border-rose-200 bg-white/70 px-3 py-1 text-sm text-rose-700 shadow-sm backdrop-blur">
            Bedroom • Living • Kitchen • Bath
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            Colorful Interiors. Premium Tiles. Lasting Comfort.
          </h1>
          <p className="mt-4 text-lg text-slate-100/90 max-w-2xl drop-shadow">
            Discover vibrant tiles and sanitary collections to craft stunning bedrooms, kitchens, and bathrooms with a modern, luxurious touch.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="rounded-full bg-gradient-to-r from-rose-600 to-orange-600 px-6 py-3 text-white shadow-lg shadow-rose-600/25 hover:shadow-xl hover:shadow-orange-600/30 transition">
              Explore Products
            </a>
            <a href="#gallery" className="rounded-full border border-rose-200 bg-white/80 px-6 py-3 text-rose-700 hover:border-rose-300 hover:bg-white transition">
              View Real Interiors
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
