'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ContactCTASectionProps {
  eyebrow?: string;
  title?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function ContactCTASection({
  eyebrow = "Let's talk",
  title = "We'd love to hear about your project",
}: ContactCTASectionProps) {
  const router = useRouter();
  return (
    <section className="relative bg-gray-100 py-32 md:py-48 overflow-hidden">
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-2xl md:text-4xl lg:text-5xl text-neutral-500 font-semibold">
          {eyebrow}
        </p>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-12 leading-tight">
          {title}
        </h2>

        <button
          onClick={() => router.push("/start-project")}
          className="group relative inline-flex cursor-pointer items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-600 transition duration-300"
        >
          Start your project
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
        </button>
      </div>
    </section>
  );
}
