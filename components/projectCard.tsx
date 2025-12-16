"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index, isFeatured }) => {
  const { title, tagline, category, images, slug } = project;
  const imageSrc = images?.[0];
  const router = useRouter();

  // Row-based alternation logic
  const rowIndex = Math.floor(index / 2);
  const isFirstInRow = index % 2 === 0;

  const isWide =
    rowIndex % 2 === 0
      ? isFirstInRow   // even row → wide left
      : !isFirstInRow; // odd row → wide right

  return (
    <article
      onClick={() => router.push(`/our-work/${slug}`)}
      className={`
        group cursor-pointer
        col-span-12
        ${isWide ? "md:col-span-7" : "md:col-span-5"}
      `}
    >
      {/* IMAGE */}
      <div className="relative h-[420px] w-full overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />

        {/* Hover button */}
        <div className="absolute bottom-6 left-6">
          <button className="bg-white/90 backdrop-blur px-5 py-5 rounded-full opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition">
            <ArrowUpRight className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>

      {/* TEXT */}
      <div className="mt-4 space-y-1">
        <p className="text-sm text-gray-500">
          {tagline || category}
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          {title}
        </h3>
      </div>
    </article>
  );
};

export default ProjectCard;
