'use client';

import ProjectCard from '@/components/projectCard';
import { getProjects } from '@/lib/projects';
import Header from '@/components/header';
import ContactCTASection from '@/components/contactCTASection';
import Footer from '@/components/footer';

export default function OurWorkPage() {
  const projects = getProjects();

  return (
    <>
      <Header />

      <main className="bg-white pt-20 md:pt-28">
        {/* Editorial Intro */}
        <section className="w-full px-4 sm:px-6 lg:px-12 mb-14 md:mb-20">
          <h1 className="
            text-3xl md:text-4xl lg:text-5xl
            font-semibold
            text-gray-900
            max-w-3xl
          ">
            Your Long-Term Product & Engineering Partner
          </h1>

          <p className="
            mt-4 md:mt-6
            text-sm md:text-base lg:text-lg
            text-gray-600
            leading-relaxed
            max-w-2xl
          ">
            We design and build world-class digital products for ambitious teams.
          </p>
        </section>

        {/* Project Grid */}
        <section className="px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
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
