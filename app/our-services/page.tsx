"use client";

import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react'; // Optional: install lucide-react or use a SVG

const services = [
  { title: "Web Development", desc: "High-performance, SEO-optimized digital experiences built with Next.js and Tailwind." },
  { title: "App Development", desc: "Native and cross-platform mobile solutions that prioritize user engagement and speed." },
  { title: "SaaS Solutions", desc: "Scalable cloud-based architectures designed to grow with your user base." },
  { title: "Property Management Systems (PMS)", desc: "Customized automation for real estate and hospitality management." },
  { title: "School Management Systems (SMS)", desc: "Streamlined digital ecosystems for educational institutions and administrators." },
  { title: "Gym Management Systems", desc: "All-in-one platforms for member tracking, billing, and workout scheduling." },
];

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
            Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
            We provide end-to-end digital transformation through specialized engineering and strategic design.
          </p>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-10 hover:bg-black hover:text-white transition-all duration-500 group">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-gray-500">
                0{index + 1}
              </span>
              <h3 className="text-3xl font-bold mt-4 mb-6 tracking-tight uppercase">
                {service.title}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PRODUCTS SECTION --- */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-[0.4em] text-gray-500 uppercase mb-4">Our Products</h2>
              <h3 className="text-6xl font-bold tracking-tighter">Proprietary Tech</h3>
            </div>
          </div>

          <div className="group relative overflow-hidden border border-white/10 rounded-2xl bg-gradient-to-br from-zinc-900 to-black p-8 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white text-black px-4 py-1 rounded-full text-xs font-black uppercase w-fit mb-6">
                  Featured Product
                </div>
                <h4 className="text-5xl font-bold tracking-tighter mb-6">InsightNova PMS</h4>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  The next generation of Property Management. InsightNova leverages AI to predict maintenance needs, 
                  automate tenant billing, and maximize occupancy rates through intelligent data.
                </p>
                <Link 
                  href="/insightnova" 
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors"
                >
                  View Landing Page <ArrowUpRight size={20} />
                </Link>
              </div>
              
              {/* Product Visual Placeholder */}
              <div className="relative aspect-square rounded-xl bg-zinc-800/50 overflow-hidden border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-9xl rotate-12 select-none">
                  NOVA
                </div>
                {/* Replace with actual product screenshot */}
                <div className="absolute inset-10 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10">
          Ready to build the future?
        </h2>
        <Link href="/contact" className="text-2xl font-light border-b-2 border-white pb-2 hover:text-gray-400 hover:border-gray-400 transition-all">
          Get in touch with us
        </Link>
      </section>

      <Footer />
    </main>
  );
}