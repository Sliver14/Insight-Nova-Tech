"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type CategoryKey = "technology" | "experience" | "strategy" | "growth";

const categories: Record<CategoryKey, {
  title: string;
  description: string;
  services: string[];
  image: string;
}> = {
  technology: {
    title: "Technology",
    description:
      "We are a leader in building cutting-edge mobile and web applications that are AI-driven and intuitive digital solutions. We push boundaries and solve complex challenges through products that drive real impact.",
    services: [
      "Mobile App Development",
      "Web Development",
      "AI & Innovation",
      "Backend & Infrastructure",
      "Emerging Technology",
    ],
    image: "/Futuristic side view portrait of young african-american woman wearing vr headset against purple background _ Premium Photo.jpeg",
  },
  experience: {
    title: "Experience",
    description:
      "We craft exceptional user experiences through deep research, thoughtful UX design, and polished visual execution that resonates with your audience.",
    services: [
      "Product Vision",
      "User Research",
      "UX Design",
      "Visual Design",
      "Design Systems",
    ],
    image: "/experience-image.png",
  },
  strategy: {
    title: "Strategy",
    description:
      "We align technology with business goals through strategic planning, market insights, and technical architecture that set the foundation for long-term success.",
    services: [
      "Digital Strategy",
      "Product Roadmapping",
      "Market & Competitive Analysis",
      "Technical Architecture Planning",
      "Innovation Consulting",
    ],
    image: "/strategy-image.png",
  },
  growth: {
    title: "Growth",
    description:
      "We help products scale sustainably with performance optimization, data-driven decisions, and infrastructure built to support growing demand.",
    services: [
      "Product Optimization",
      "Performance & Analytics",
      "Conversion Rate Optimization",
      "Scaling Infrastructure",
      "Long-term Product Support",
    ],
    image: "/growth-image.png",
  },
};

const categoryOrder: CategoryKey[] = [
  "technology",
  "experience",
  "strategy",
  "growth",
];

export default function WhatWeDoSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("technology");
  const activeIndex = categoryOrder.indexOf(activeCategory);

  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
      <div className="relative w-full px-4 sm:px-6 lg:px-8 md:px-12 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* LEFT: Category list + description & services */}
        <div className="flex-1 space-y-8 relative z-10">
          <p className="text-lg text-white/70">What we do</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Elegant solutions built on proven methodologies.
          </h2>

          <div className="relative space-y-8 mt-8">
            {/* Vertical indicator line */}
            <div
              className="absolute left-0 top-2 w-px bg-white/40 h-full transition-transform duration-500 ease-out"
              style={{
                // transform: `translateY(${activeIndex * 112}px)`,
                height: "396px",
              }}
            />

            {categoryOrder.map((key, index) => {
              const cat = categories[key];
              const isActive = activeCategory === key;

              return (
                <div
                  key={key}
                  onMouseEnter={() => setActiveCategory(key)}
                  onClick={() => setActiveCategory(key)}
                  className="relative pl-8 cursor-pointer"
                >
                  {/* Active dot */}
                  {isActive && (
                    <div className="absolute left-0 top-3 w-px h-6 bg-white transition-all duration-300" />
                  )}

                  {/* Category title */}
                  <h3
                    className={`flex items-center gap-4 text-2xl md:text-3xl font-bold transition-all duration-300 ${
                      isActive ? "text-white scale-[1.02]" : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    <span className={isActive ? "text-white/70" : "text-white/30"}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {cat.title}
                    <ArrowUpRight
                      className={`w-5 h-5 transition-all duration-300 ${
                        isActive
                          ? "translate-x-1 -translate-y-1 opacity-100"
                          : "opacity-0 group-hover:opacity-50"
                      }`}
                    />
                  </h3>

                  {/* Description + services for this category */}
                  {isActive && (
                    <div className="flex mt-4 space-y-4 max-w-4xl gap-10 text-white/50">
                      <p className="flex flex-1">{cat.description}</p>
                      <ul className="flex flex-1 flex-col space-y-2 text-white">
                        {cat.services.map((service) => (
                          <li key={service}>{service}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Service Button + Dynamic Image */}
        {/* <div className="flex-1 relative flex flex-col w-full h-full lg:justify-center lg:items-center"> */}

          <div className="
            relative flex flex-1 lg:justify-center lg:items-center
            w-full
            h-72 sm:h-96 md:h-[450px] lg:h-[500px]
            lg:max-w-lg
          ">

            <Image
              src={categories[activeCategory].image}
              alt={categories[activeCategory].title}
              fill
              className="object-cover rounded-xl transition-all duration-700"
              priority
            />
          </div>

          {/* <Link
            href="/services"
            className="mt-8 inline-block border-2 border-white/50 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition duration-300"
          >
            Services →
          </Link> */}
        </div>
      {/* </div> */}
    </section>
  );
}
