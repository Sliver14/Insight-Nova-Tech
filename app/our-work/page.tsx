import ProjectCard from '../../components/projectCard';
import { getProjects } from '../../lib/projects';
import Link from 'next/link';
import Header from '@/components/header';

export default function OurWorkPage() {
  const allProjects = getProjects();

  return (
    <main>
        <Header/>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold text-[#1A1A1A] mb-4">A Portfolio of Transformative Work</h1>
          <p className="text-xl text-[#666666] mb-16">
            From enterprise SaaS to disruptive mobile experiences, see how we engineer solutions that matter.
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allProjects.map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-[#0A0A1F] py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-4">Let’s Talk</h2>
          <p className="text-xl text-gray-300 mb-8">We’d love to hear about your project.</p>
          <Link
            href="/start-project"
            className="bg-[#FF4D4D] text-white text-lg font-bold py-4 px-10 rounded-full 
                       hover:bg-opacity-90 transition duration-300 shadow-xl"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}