"use client";

import Link from "next/link";
import Image from "next/image";
import ProjectCard from "../components/projectCard";
import { getFeaturedProjects } from "../lib/projects";
import Header from "@/components/header";
import { ArrowUpRight } from "lucide-react";
import WhatWeDo from "../components/whatWeDo"

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main className="w-screen flex flex-col bg-white">
      <Header />

      {/* 1. Hero Section */}
      <section className="relative flex flex-col w-full pt-36 md:pt-48 text-center gap-20 bg-black/98">
          {/* PNG Texture Overlay */}
          <Image
              src="/hero-background-gradient.png"
              alt="Background texture"
              fill
              priority
              className="object-contain mix-blend-screen pointer-events-none select-none opacity-100"
            />
          

          {/* Hero Content */}
          <div className="flex w-full">
            <div className="relative px-20 z-10 max-w-3xl">  {/* Limits width and centers the block */}
              <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight text-left">
                Web and Mobile Application
              </h1>

              <p className="text-xl text-white/50 mb-10 text-left">
                A modern tech agency specializing in high-performance
                applications, enterprise platforms, and transformative digital
                experiences.
              </p>
            </div>
          </div>
          

          {/* CTA WITH VIDEO */}
          <div className="flex w-full h-auto px-12 gap-20">
            <div className="relative w-full h-[520px] flex flex-1">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-br-[150px] opacity-50"
              >
                <source src="/5c76ce4998ac6bcff7b7f60d_67e1e08d1c69ff97c254a4c9_Preview-U-Crop-Updated-optmized-transcode.mp4" type="video/mp4" />
                {/* Fallback for browsers that don't support video */}
                <div className="absolute inset-0 bg-black/60" />
              </video>
              <div className="absolute top-0 left-0 bg-black z-20  w-52 h-62">
                <button className="text-white bg-neutral-600 px-3 w-auto py-3 rounded-full hover:text-white/90">
                  Work with us
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-start px-20">
              <h1 className="text-left">Drawing on decades of expertise, Utility builds new products with innovative client partners.</h1>
              <button className="flex items-center gap-2">
                View all services 
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>

          {/* Trusted By / Partner Logos Section */}
          <section className="py-16 md:pt-24 overflow-hidden">
            <div className=" mx-auto px-12 sm:px-6 lg:px-8">

              {/* Marquee Container */}
              <div className="relative">
                {/* Overflow hidden for clean edges */}
                <div className="overflow-hidden">
                  <div className="
                    flex items-center gap-16 md:gap-24
                    animate-marquee md:animate-none  /* Scroll only on mobile/small screens */
                    whitespace-nowrap
                  ">
                    {/* First set of logos */}
                    <Image src="/brands logo/67608fbae911f6aaf6dd24ca_Logo Samsung.svg" alt="Client 1" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/67608fe5dab4348d94ee6cc9_Coca-Cola Brand.svg" alt="Client 2" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/67608ff410d975107897344c_Brand Verizon.svg" alt="Client 3" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/676090109234d980622102dd_Brand DirecTV.svg" alt="Client 4" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/6760902d036c8f0efdfa14b7_Warner Music Group.svg" alt="Client 5" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />

                    {/* Duplicate set for seamless infinite loop */}
                    <Image src="/brands logo/67608fbae911f6aaf6dd24ca_Logo Samsung.svg" alt="Client 1" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/67608fe5dab4348d94ee6cc9_Coca-Cola Brand.svg" alt="Client 2" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/67608ff410d975107897344c_Brand Verizon.svg" alt="Client 3" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/676090109234d980622102dd_Brand DirecTV.svg" alt="Client 4" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                    <Image src="/brands logo/6760902d036c8f0efdfa14b7_Warner Music Group.svg" alt="Client 5" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
      </section>

      {/* 2. Top Featured Projects */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-30">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                isFeatured={true}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/our-work"
              className="flex items-center w-[180px]
                text-[#4D4DFF] font-semibold text-lg
                border-b-2 border-[#4D4DFF]
                hover:text-[#FF4D4D] hover:border-[#FF4D4D]
                transition duration-300
              "
            >
              View More Work 
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: What We Do / Methodologies Section */}
      <WhatWeDo />
    </main>
  );
}
