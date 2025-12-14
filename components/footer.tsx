"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white/70 w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-16">
          {/* Logo */}
          <div className="relative w-full h-[200px]">
            <Image
              src="/insightnovatech logo lightpng.png"  // ← Place your large grayscale logo here (transparent PNG recommended)
              alt="Insight Novatech"
              fill
              className="object-cover opacity-40 w-full h-full"
              priority
            />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 text-sm">
            <div className="flex flex-col items-start space-y-4">
              <p className="text-white/50 text-sm uppercase tracking-wider">Services</p>
              <ul className="flex flex-col items-start space-y-3">
                <li>Tech & Innovation</li>
                <li>Experience & Design</li>
                <li>Strategy & Consulting</li>
                <li>Product Growth</li>
              </ul>
            </div>

            <div className="flex flex-col items-start space-y-4">
              <p className="text-white/50 text-sm uppercase tracking-wider">Services</p>
              <ul className="flex flex-col items-start space-y-3">
                <li>Tech & Innovation</li>
                <li>Experience & Design</li>
                <li>Strategy & Consulting</li>
                <li>Product Growth</li>
              </ul>
            </div>

            <div className="flex flex-col items-start space-y-4">
              <p className="text-white/50 text-sm uppercase tracking-wider">Services</p>
              <ul className="flex flex-col items-start space-y-3">
                <li>Tech & Innovation</li>
                <li>Experience & Design</li>
                <li>Strategy & Consulting</li>
                <li>Product Growth</li>
              </ul>
            </div>

            <div className="flex flex-col items-start space-y-4">
              <p className="text-white/50 text-sm uppercase tracking-wider">Services</p>
              <ul className="flex flex-col items-start space-y-3">
                <li>Tech & Innovation</li>
                <li>Experience & Design</li>
                <li>Strategy & Consulting</li>
                <li>Product Growth</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="w-full pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p>© 2025 Insight Novatech</p>

            <Link
              href="#"
              className="group flex items-center gap-2 hover:text-white transition"
            >
              back to top
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}