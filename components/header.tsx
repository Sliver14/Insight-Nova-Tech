"use client"

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    heroRef.current = document.querySelector('#hero') as HTMLElement;

    // ✅ NO HERO → force solid header immediately
    if (!heroRef.current) {
      setIsPastHero(true);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!heroRef.current) {
        setIsPastHero(true);
        setIsVisible(true);
        return;
      }

      const heroBottom =
        heroRef.current.offsetTop + heroRef.current.offsetHeight;

      const pastHero = currentScrollY >= heroBottom - 100;
      setIsPastHero(pastHero);

      if (pastHero) {
        if (currentScrollY > lastScrollY && currentScrollY > 150) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  return (
    <>
      <header
        className={`
          absolute inset-x-0 top-0 z-50 transition-all duration-300 ease-out
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
          ${isPastHero 
            ? "bg-white/95 backdrop-blur-md fixed text-black shadow-lg" 
            : "bg-transparent text-white"
          }
        `}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src={isPastHero ? "/insightnovatech logo dark222.png" : "/insightnovatech logo lightpng23.png"}
              alt="Insight Nova Tech"
              width={320}
              height={80}
              className="h-5 w-auto sm:h-6 md:h-8 transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation - centered */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-12 xl:gap-20 text-md">
              <Link 
                href="/our-company" 
                className="hover:opacity-70 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Company
              </Link>
              <Link 
                href="/our-work" 
                className="hover:opacity-70 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Work
              </Link>
            </div>
          </nav>

          {/* Right: CTA + Hamburger */}
          <div className="flex items-center gap-5 md:gap-8">
            {/* CTA - responsive visibility */}
            <Link
              href="/start-project"
              className="hidden group relative sm:inline-flex items-center gap-2 text-base md:text-md font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a project
                          {/* Arrow container */}
            <span className="relative w-5 h-5 overflow-hidden">
              
              {/* Default arrow */}
              <ArrowUpRight
                className="
                  absolute inset-0
                  transition-all duration-300 ease-out
                  group-hover:translate-x-2 group-hover:-translate-y-2
                  group-hover:opacity-0
                "
              />

              {/* Hover arrow */}
              <ArrowUpRight
                className="
                  absolute inset-0
                  translate-x-[-0.75rem] translate-y-[0.75rem]
                  opacity-0
                  transition-all duration-300 ease-out
                  group-hover:translate-x-0 group-hover:translate-y-0
                  group-hover:opacity-100
                "
              />
            </span>
            </Link>

            {/* Hamburger → X */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="relative w-10 h-10 flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-7 h-5">
                {/* Top line */}
                <span className={`
                  absolute left-0 top-0 w-full h-0.5 rounded-full transition-all duration-300
                  ${mobileMenuOpen ? "rotate-45 translate-y-2.5" : "rotate-0"}
                  ${isPastHero ? "bg-black" : "bg-white"}
                `} />
                {/* Middle line */}
                <span className={`
                  absolute left-0 top-2 w-full h-0.5 rounded-full transition-all duration-300
                  ${mobileMenuOpen ? "opacity-0" : "opacity-100"}
                  ${isPastHero ? "bg-black" : "bg-white"}
                `} />
                {/* Bottom line */}
                <span className={`
                  absolute left-0 top-4 w-full h-0.5 rounded-full transition-all duration-300
                  ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : "opacity-60"}
                  ${isPastHero ? "bg-black" : "bg-white"}
                `} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black text-white flex flex-col pt-20 md:pt-24" 
          role="dialog" 
          aria-modal="true"
        >
          
          {/* Main Navigation */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-12">
            <Link
              href="/our-company"
              onClick={() => setMobileMenuOpen(false)}
              className="text-5xl sm:text-6xl font-bold hover:text-white/60 transition"
            >
              Our Company
            </Link>
            <Link
              href="/our-work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-5xl sm:text-6xl font-bold hover:text-white/60 transition"
            >
              Our Work
            </Link>
          </nav>

          {/* Footer */}
          <div className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/50">
            <div className="flex justify-center gap-8 mb-6">
              <a href="#" className="hover:text-white transition">LinkedIn →</a>
              <a href="#" className="hover:text-white transition">Twitter →</a>
              <a href="#" className="hover:text-white transition">Instagram →</a>
            </div>
            <p>© 2025 Insight Nova Tech</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;