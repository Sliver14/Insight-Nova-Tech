// 'use client';

import { getProjectBySlug } from '@/lib/projects';
import Link from 'next/link';
import Image from 'next/image';
import ContactCTASection from '@/components/contactCTASection';
import Footer from '@/components/footer';
import Header from '@/components/header';

// Function to generate static params for Next.js
export async function generateStaticParams() {
  return [
    { slug: 'ascent-property-manager' }, 
    { slug: 'educatelink-platform' },
    // ... other slugs
  ];
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return <div>Project Not Found</div>;

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto mt-12 md:mt-24 px-4 sm:px-6 md:px-8 py-12 md:py-16">
        {/* Category */}
        <p className="text-xs sm:text-sm md:text-base text-neutral-500 font-medium uppercase tracking-widest mb-2">
          Category: {project.category}
        </p>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#1A1A1A] mb-6 md:mb-8 leading-tight">
          {project.title}
        </h1>

        {/* Hero Image */}
        <div className="mb-8 md:mb-12 relative w-full h-[35vh] sm:h-[40vh] md:h-[50vh] rounded-xl overflow-hidden shadow-xl">
          <Image
            src={project.images[0]}
            alt={`${project.title} main view`}
            fill
            className="object-cover"
          />
        </div>

        {/* Short Description */}
        <p className="text-sm sm:text-base md:text-lg text-[#333333] leading-relaxed mb-12 max-w-4xl">
          {project.description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-2">
                Project Overview
              </h2>
              <p className="text-sm sm:text-base md:text-base text-[#666666] leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Impact */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-2">
                Key Impact
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-base text-[#666666]">
                {project.impact.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 bg-gray-50 p-4 sm:p-5 md:p-6 rounded-xl h-fit lg:sticky top-24 space-y-4">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#1A1A1A]">
              Tech Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#4D4DFF]/10 text-neutral-600 text-xs sm:text-sm md:text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </aside>
        </div>

        {/* Gallery */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-4">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {project.images.map((img, index) => (
              <div
                key={index}
                className="relative w-full h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <ContactCTASection />
      <Footer />
    </>
  );
}
