'use client';

import ProjectCard from '@/components/projectCard';
import { getProjects } from '@/lib/projects';
import Link from 'next/link';
import Header from '@/components/header';
import ContactCTASection from '@/components/contactCTASection';
import Footer from '@/components/footer';

export default function OurWorkPage() {
  const projects = getProjects();

  return (
    <>
      <Header />

      <main className="bg-white pt-32">
        {/* Editorial Intro */}
        <section className="w-full mx-auto px-4 sm:px-6 lg:px-32 mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 max-w-3xl">
            Your Long-Term Product & Engineering Partner
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl">
            We design and build world‑class digital products for ambitious teams.
          </p>
        </section>

        {/* Masonry-style Project Grid */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                isFeatured
              />
            ))}
          </div>

        </section>

        {/* CTA */}
        <ContactCTASection />
      </main>

      <Footer />
    </>
  );
}
