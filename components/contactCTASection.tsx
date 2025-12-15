'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ContactCTASectionProps {
  eyebrow?: string;
  title?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function ContactCTASection({
  eyebrow = "Let's talk",
  title = "We'd love to hear about your project",
  ctaText = "Start your project",
  ctaHref = "/start-project",
}: ContactCTASectionProps) {
  return (
    <section className="relative bg-gray-100 py-32 md:py-48 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-2xl md:text-3xl text-gray-600 mb-6">
          {eyebrow}
        </p>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-12 leading-tight">
          {title}
        </h2>

        <Link
          href={ctaHref}
          className="group inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-800 transition duration-300"
        >
          {ctaText}
          <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
        </Link>
      </div>
    </section>
  );
}
