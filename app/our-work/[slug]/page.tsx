import { getProjectBySlug } from '@/lib/projects';
import Link from 'next/link';
import Image from 'next/image';

// Function to generate static params for Next.js
export async function generateStaticParams() {
  // Logic to fetch all project slugs for static generation
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
    <main className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero/Overview */}
      <p className="text-[#4D4DFF] font-semibold uppercase tracking-widest mb-2">Category: {project.category}</p>
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A1A1A] mb-8">{project.title}</h1>
      
      <div className="mb-12 relative w-full h-[50vh] rounded-xl overflow-hidden shadow-2xl">
         {/* Placeholder Image */}
         <Image src={project.images[0]} alt={`${project.title} main view`} fill className="object-cover" />
      </div>

      <p className="text-xl text-[#1A1A1A] mb-16 max-w-4xl">{project.description}</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Detail Section (Left Columns) */}
        <div className="lg:col-span-2">
          {/* Overview */}
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Project Overview</h2>
          <p className="text-lg text-[#666666] mb-10">{project.overview}</p>
          
          {/* Impact */}
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Key Impact</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-[#666666]">
            {project.impact.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>

        {/* Tech Stack (Right Column/Sidebar) */}
        <div className="lg:col-span-1 bg-gray-50 p-6 rounded-xl h-fit sticky top-24">
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Tech Stack Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span key={tech} className="bg-[#4D4DFF]/10 text-[#4D4DFF] text-sm font-medium px-4 py-2 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Full Image Gallery */}
      <div className="mt-20">
         <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Gallery</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((img, index) => (
               <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
                   <Image src={img} alt={`${project.title} screenshot ${index + 1}`} fill className="object-cover" />
               </div>
            ))}
         </div>
      </div>

      {/* CTA: Start a Project */}
      <div className="mt-20 text-center border-t pt-10">
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6">Ready to build your next breakthrough?</h3>
        <Link
          href="/start-project"
          className="bg-[#FF4D4D] text-white text-lg font-bold py-4 px-12 rounded-full 
                     hover:bg-opacity-90 transition duration-300 shadow-xl"
        >
          Start a Project
        </Link>
      </div>
    </main>
  );
}