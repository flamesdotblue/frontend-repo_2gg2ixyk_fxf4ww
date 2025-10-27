import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] sm:h-screen w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Warm, colorful gradient overlay (doesn't block 3D interactions) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/80 via-amber-50/60 to-white/95" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-sm text-amber-700 shadow-sm backdrop-blur">
            Living • Kitchen • Bath • Outdoor
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            Beautiful Interiors Start with Inspired Tiles
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-2xl">
            From cozy bedrooms to luxurious bathrooms, discover vibrant designs and premium sanitary ware that elevate every corner of your home.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 text-white shadow-lg shadow-orange-600/20 hover:shadow-xl hover:shadow-orange-600/30 transition">
              Explore Products
            </a>
            <a href="#gallery" className="rounded-full border border-amber-200 bg-white/70 px-6 py-3 text-amber-700 hover:border-amber-300 hover:bg-white transition">
              View Gallery
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
