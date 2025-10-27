import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] sm:h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-sm text-blue-700 shadow-sm backdrop-blur">Premium Tiles • Sanitary Ware • Fittings</span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            Transform Your Space with Elegant Tiles & Sanitary Ware
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-2xl">
            Trusted by hundreds of homes and builders across Srikakulam District.
            Experience modern designs, durable quality, and top brands.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition">Explore Products</a>
            <a href="#about" className="rounded-full border border-blue-200 bg-white/70 px-6 py-3 text-blue-700 hover:border-blue-300 hover:bg-white transition">About Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
