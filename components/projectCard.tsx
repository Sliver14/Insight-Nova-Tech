"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, isFeatured = false }) => {
  const { title, tagline, description, category, images, slug } = project;
  const imageSrc = images?.[0] || "/images/placeholder.jpg";
  const router = useRouter();

  return (
    <article
      className="
        group relative w-full
        grid grid-cols-1 md:grid-cols-2
        bg-white overflow-hidden
      "
    >
      {/* TEXT SECTION */}
      <div
        className="
          relative z-10 flex flex-col justify-center
          px-6 py-8
          sm:px-10
          md:px-14
          lg:px-24
        "
      >
        <p className="text-sm md:text-base font-medium text-gray-500 mb-4">
          {tagline || `Best for ${category}`}
        </p>

        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-8 leading-tight">
          {title}
        </h3>

        <p className="text-base sm:text-lg text-gray-700 mb-12 max-w-xl">
          {description}
        </p>

        <button
          onClick={() => router.push(`/our-work/${slug}`)}
          className="
            inline-flex items-center gap-3 w-fit
            bg-gray-200 text-gray-800
            px-8 py-4 rounded-full font-semibold
            transition-all duration-300
            hover:bg-gray-300
          "
        >
          View Project
          <ArrowUpRight
            className="
              w-5 h-5
              transition-transform duration-300
              group-hover:translate-x-1 group-hover:-translate-y-1
            "
          />
        </button>
      </div>

      {/* IMAGE SECTION */}
      <div className="relative w-full h-64 md:h-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority={isFeatured}
          className="z-20
          hover:rounded-bl-[240px]
            object-cover
           
          "
        />
        <button
          onClick={() => router.push(`/our-work/${slug}`)}
          className=" absolute bottom-0 left-0 z-10
            inline-flex items-center gap-3 w-fit
            bg-gray-200 text-gray-800
            px-8 py-4 rounded-full font-semibold
            transition-all duration-300
            hover:bg-gray-300
          "
        >
          <ArrowUpRight
            className="
              w-5 h-5
              transition-transform duration-300
              group-hover:translate-x-1 group-hover:-translate-y-1
            "
          />
        </button>
        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent md:hidden" />
      </div>
    </article>
  );
};

export default ProjectCard;
