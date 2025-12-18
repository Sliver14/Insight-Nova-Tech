"use client";


import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({
  project,
  index = 0,
  isFeatured = false,
}: {
  project: any;
  index?: number;
  isFeatured?: boolean;
}) {
  const { title, tagline, category, images, slug } = project;
  const imageSrc = images?.[0];
  const router = useRouter();

  // Row-based alternation (matches your existing logic)
  const rowIndex = Math.floor(index / 2);
  const isFirstInRow = index % 2 === 0;

  const isWide =
    rowIndex % 2 === 0
      ? isFirstInRow
      : !isFirstInRow;

  return (
    <Link
      href={`/our-work/${slug}`}
      className={`
        group cursor-pointer col-span-12 
        ${isFeatured ? (isWide ? "md:col-span-7" : "md:col-span-5") : "md:col-span-4"}
      `}
    >
      {/* IMAGE WRAPPER */}
      <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden rounded-2xl">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority={isFeatured}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

        {/* FLOATING CTA */}
        <div className="absolute top-6 right-6">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur
            opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
            <ArrowUpRight className="w-5 h-5 text-black" />
          </span>
        </div>

        {/* TEXT SCRIM (darkened background behind text) */}
        <div className="absolute inset-x-0 bottom-0">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

          {/* Text content */}
          <div className="relative p-6 md:p-8 text-white">
            <p className="text-sm text-white/70">
              {tagline || category}
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold mt-2 leading-tight">
              {title}
            </h3>
          </div>
        </div>

      </div>
    </Link>
  );
}
