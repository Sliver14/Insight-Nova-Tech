"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const HERO_HEIGHT = 520; // match your hero section height

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect hero exit
      setIsPastHero(currentScrollY > HERO_HEIGHT);

      // Detect scroll direction (only after hero)
      if (currentScrollY > HERO_HEIGHT) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false); // scrolling down → hide
        } else {
          setIsVisible(true); // scrolling up → show
        }
      } else {
        setIsVisible(true); // always visible in hero
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
          absolute top-0 left-0 right-0 z-50
          transition-all duration-300 ease-out
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
          ${isPastHero ? "bg-white text-black shadow-sm fixed" : "bg-transparent text-white"}
        `}
      >
        <div className="mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src={
                isPastHero
                  ? "/insightnovatech logo darkpng.png"
                  : "/insightnovatech logo lightpng.png"
              }
              alt="Insight Nova Tech"
              width={300}
              height={80}
              className="h-32 w-auto transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-12 lg:space-x-20 text-lg">
              <Link href="/our-company" className="hover:opacity-70 transition">
                Our Company
              </Link>
              <Link href="/our-work" className="hover:opacity-70 transition">
                Our Work
              </Link>
            </div>
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-6">
            <Link
              href="/start-project"
              className="inline-flex items-center gap-2 text-sm md:text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a project
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center"
            >
              <span
                className={`absolute w-6 h-0.5 rounded-full transition-all ${
                  isPastHero ? "bg-black" : "bg-white"
                } ${mobileMenuOpen ? "opacity-0" : "top-4"}`}
              />
              <span
                className={`absolute w-6 h-0.5 rounded-full transition-all ${
                  isPastHero ? "bg-black" : "bg-white"
                } ${
                  mobileMenuOpen
                    ? "-rotate-45"
                    : "top-6 opacity-70"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col">
          <div className="flex justify-between p-6 border-b border-white/10">
            <Link href="/start-project" className="flex items-center gap-2">
              Start a project <ArrowUpRight className="w-5 h-5" />
            </Link>
            <button onClick={() => setMobileMenuOpen(false)}>✕</button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-10">
            <Link href="/our-company" className="text-5xl font-bold">
              Our Company
            </Link>
            <Link href="/our-work" className="text-5xl font-bold">
              Our Work
            </Link>
            <div className="p-8 border-t text-center text-sm text-white/50"> 
            <div className="flex justify-center gap-8 mb-6"> 
              <a href="#" className="hover:text-white">LinkedIn →</a> 
              <a href="#" className="hover:text-white">Twitter →</a> 
              <a href="#" className="hover:text-white">Instagram →</a> 
            </div> <p>© 2025 Insight Nova Tech</p> </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
