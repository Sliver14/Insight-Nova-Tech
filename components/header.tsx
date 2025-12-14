"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from "lucide-react";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent mt-8 text-white">
        {/* Constrained max width for consistent alignment */}
        <div className="mx-auto flex items-center justify-between h-20 px-4  sm:px-6 lg:px-8">

          <div className='flex'>
            {/* Left: Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/insightnovatech logo lightpng.png"
              alt="Insight Nova Tech"
              width={1400}
              height={1400}
              className="h-32 w-auto md:h-42"
              priority
            />
          </Link>

          {/* Center: Desktop Navigation - takes all available space and centers links perfectly */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-12 lg:space-x-20 text-lg">
              <Link href="/our-company" className="hover:text-gray-300 transition">
                Our Company
              </Link>
              <Link href="/our-work" className="hover:text-gray-300 transition">
                Our Work
              </Link>
            </div>
          </nav>

          </div>
          
          {/* Right: CTA + Hamburger */}
          <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="/start-project"
            className="
              mr-auto inline-flex items-center gap-2 text-lg font-medium text-white
            "
            onClick={() => setMobileMenuOpen(false)}
          >
            Start a project
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>


            {/* Hamburger → X Button */}
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-7 h-5">
                {/* Top line */}
                <span
                  className={`absolute left-0 top-2 block w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Bottom line */}
                <span
                  className={`absolute left-0 top-4 block w-full h-0.5 rounded-full transition-all duration-300 ease-in-out ${
                    mobileMenuOpen
                      ? "bg-white -rotate-45 -translate-y-2.5"
                      : "bg-white/60 rotate-0 translate-y-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu - unchanged */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col">
          <div className="flex items-center justify-end p-6 border-b">
          <Link
            href="/start-project"
            className="
              mr-auto inline-flex items-center gap-2 text-lg font-medium text-white
              transition-all duration-300 hover:gap-3
            "
            onClick={() => setMobileMenuOpen(false)}
          >
            Start a project
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>


            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center space-y-8 pb-20">
            <Link
              href="/our-company"
              onClick={() => setMobileMenuOpen(false)}
              className="text-5xl md:text-6xl lg:text-7xl font-bold hover:text-white/50 transition"
            >
              Our Company
            </Link>
            <Link
              href="/our-work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-5xl md:text-6xl lg:text-7xl font-bold hover:text-white/50 transition"
            >
              Our Work
            </Link>
          </nav>

          <div className="p-8 border-t text-center text-sm text-white/50">
            <div className="flex justify-center gap-8 mb-6">
              <a href="#" className="hover:text-white">LinkedIn →</a>
              <a href="#" className="hover:text-white">Twitter →</a>
              <a href="#" className="hover:text-white">Instagram →</a>
            </div>
            <p>© 2025 Insight Nova Tech</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;