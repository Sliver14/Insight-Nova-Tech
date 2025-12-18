'use client';

import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ContactCTASectionProps {
  eyebrow?: string;
  title?: string;
}

export default function ContactCTASection({
  eyebrow = "Let's talk",
  title = "We'd love to hear about your project",
}: ContactCTASectionProps) {
  const router = useRouter();
  return (
    <section className="relative bg-gray-100 py-32 md:py-48 overflow-hidden">
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-left md:text-center">
        <p className="text-2xl md:text-4xl lg:text-5xl text-neutral-500 font-semibold mb-2">
          {eyebrow}
        </p>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-12 leading-tight">
          {title}
        </h2>

        <div className="flex flex-col md:flex-row md:justify-center">
          <button
            onClick={() => router.push("/start-project")}
            className="self-start md:self-auto group inline-flex cursor-pointer items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-600 transition duration-300"
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
      </div>
    </section>
  );
}
