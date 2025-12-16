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

        <h3 className="text-xl sm:text-3xl lg:text-3xl font-bold text-[#1A1A1A] mb-8 leading-tight">
          {title}
        </h3>

        <p className="text-base sm:text-lg text-gray-700 mb-12 max-w-xl">
          {description}
        </p>

        <button
          onClick={() => router.push("/our-work")}
          className="
            inline-flex items-center gap-3 w-fit
            bg-gray-200 text-gray-800 cursor-pointer
            px-8 py-4 rounded-full font-semibold
            transition-all duration-300
            hover:bg-black hover:text-white
          "
        >
          View all
          {/* Arrow container */}
                  <span className="relative w-5 h-5 overflow-hidden hover:text-white">
                    
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

      {/* IMAGE SECTION */}
      <div className="relative w-full h-64 md:h-full overflow-hidden">
        {/* Image wrapper */}
        <div
          onClick={() => router.push(`/our-work/${slug}`)}
          className="
            group/image
            absolute inset-0
            transition-all duration-500 ease-out
            hover:rounded-bl-[240px]
            cursor-pointer
          "
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            priority={isFeatured}
            className="object-cover"
          />
        </div>

        {/* Hover-reveal button */}
        <button
          onClick={() => router.push(`/our-work/${slug}`)}
          className="
            absolute bottom-6 left-6 z-30
            inline-flex items-center gap-3
            bg-gray-200 text-gray-800
            px-5 py-5 rounded-full font-semibold
            transition-all duration-300
            opacity-0 translate-y-4 cursor-pointer
            group-hover:opacity-100 group-hover:translate-y-0
            hover:bg-gray-300
          "
        >
          {/* View project */}
          <ArrowUpRight className="w-5 h-5" />
        </button>

        {/* Mobile gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:hidden pointer-events-none" />
      </div>

    </article>
  );
};

export default ProjectCard;
