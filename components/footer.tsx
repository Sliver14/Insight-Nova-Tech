"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white/70 w-full py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-16 md:space-y-20">
          
          {/* Logo */}
          <div className="relative w-full h-[160px] md:h-[200px]">
            <Image
              src="/insightnovatech logo lightpng.png"
              alt="Insight Novatech"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-20 w-full text-left">
            
            {[
              {
                title: "Insight",
                links: [
                  { label: "Home", href: "/" },
                  { label: "Our Work", href: "/our-work" },
                  { label: "About Us", href: "/our-company" },
                  { label: "Services", href: "/our-services" },
                  { label: "Start a Projects", href: "/start-project" },
                ],
              },
              {
                title: "Services",
                links: [
                  { label: "Tech & Innovation" },
                  { label: "Experience & Design" },
                  { label: "Strategy & Consulting" },
                  { label: "Product Growth" },
                ],
              },
              {
                title: "Solutions",
                links: [
                  { label: "Mobile App Development" },
                  { label: "Web Development" },
                  { label: "AI Solutions" },
                  { label: "UX/UI Design" },
                  { label: "IoT Development" },
                  { label: "Custom Software Development" },
                ],
              },
              {
                title: "Company",
                links: [
                  { label: "About Us", href: "/about" },
                  { label: "Our Team", href: "/team" },
                  { label: "We're Hiring", href: "/careers" },
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Privacy Policy", href: "/privacy" },
                ],
              },
            ].map((section) => (
              <div key={section.title} className="flex flex-col space-y-3 md:space-y-4">
                <p className="text-[11px] md:text-xs uppercase tracking-widest text-white/40">
                  {section.title}
                </p>
                <ul className="space-y-2.5 md:space-y-3 text-sm md:text-[15px] font-normal">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href ? (
                        <Link href={link.href} className="hover:text-white transition">
                          {link.label}
                        </Link>
                      ) : (
                        <span>{link.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Socials */}
            <div className="flex flex-col space-y-3 md:space-y-4">
              <p className="text-[11px] md:text-xs uppercase tracking-widest text-white/40">
                Socials
              </p>
              <ul className="space-y-2.5 md:space-y-3 text-sm md:text-[15px] font-normal">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/sylver-oyinaga-7409481a9/" },
                  { label: "Twitter", href: "https://x.com/SylvaFx?t=HwJ0xmqC8oFGi4MR3aDOcQ&s=09" },
                  { label: "Instagram", href: "https://www.instagram.com/insightnovatech?igsh=cTVuOGpleXVvMWx4" },
                ].map((social) => (
                  <li key={social.label}>
                    <Link
                      href={social.href}
                      target="_blank"
                      className="flex items-center gap-2 hover:text-white transition"
                    >
                      {social.label}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="w-full pt-10 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-5 text-xs md:text-sm">
            <p>© 2025 Insight Novatech</p>

            <Link
              href="#top"
              className="group flex items-center gap-2 hover:text-white transition"
            >
              Back to top
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
