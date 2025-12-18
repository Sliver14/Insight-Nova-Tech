"use client";

import Link from "next/link";
import Image from "next/image";
import ProjectCard from "../components/projectCard";
import { getFeaturedProjects } from "../lib/projects";
import Header from "@/components/header";
import WhatWeDo from "../components/whatWeDo"
import Footer from "@/components/footer";
import ContactCTASection from "../components/contactCTASection"
import {
  Cpu,
  PencilRuler,
  Sparkles,
  TrendingUp,
  RefreshCcw,
  ArrowUpRight,
} from "lucide-react";
import { useRouter } from "next/navigation";


export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const router = useRouter();
  return (
    <main className="w-screen flex flex-col bg-white">
      <Header />

      {/* 1. Hero Section */}
      <section id="hero" className="relative w-full pt-24 md:pt-32 lg:pt-48 pb-16 md:pb-24 bg-black/98 overflow-hidden">
        {/* PNG Texture Overlay */}
        <Image
          src="/hero-background-gradient.png"
          alt="Background texture"
          fill
          priority
          className="object-contain mix-blend-screen pointer-events-none select-none opacity-100"
        />

        {/* Hero Headline & Description */}
        <div className="relative z-10 max-w-5xl px-6 sm:px-8 lg:px-12 text-start lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-5 leading-tight">
            Custom Web & Mobile Software Solutions
          </h1>

          <p className=" text-base sm:text-lg text-white/60 max-w-3xl">
            A modern tech agency specializing in high-performance applications, enterprise platforms, and transformative digital experiences.
          </p>
        </div>

        {/* Video + Services Section */}
        <div className="relative z-10 max-w-9xl px-6 sm:px-8 lg:px-12 mt-20 lg:mt-32">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left: Video */}
            <div className="relative flex flex-1 w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] shrink-0">
              <div className="relative flex flex-1 w-full lg:w-1/2 h-[360px] sm:h-[460px] lg:h-[600px] shrink-0 overflow-hidden rounded-xl">
  
                {/* VIDEO */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster="/video-poster.jpg" // IMPORTANT for mobile
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source
                    src="/5c76ce4998ac6bcff7b7f60d_67e1e08d1c69ff97c254a4c9_Preview-U-Crop-Updated-optmized-transcode.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/60 pointer-events-none" />

              </div>


              {/* Work with us button overlay */}
              <div className="absolute top-8 left-8 z-20">
                <button
                  onClick={() => router.push("/start-project")}
                  className="
                    group flex items-center gap-3
                  bg-neutral-600 text-white
                    px-5 py-3 md:px-6 md:py-4
                    rounded-full
                    text-sm md:text-base
                    font-medium
                    hover:bg-neutral-500 transition
                  "
                >
                  <span>Work with us</span>

                  {/* Arrow container */}
                  <span className="relative w-5 h-5 overflow-hidden">
                    
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

            </div>

            {/* Right: Text & Services */}
            <div className="w-full lg:w-1/2 flex flex-col flex-1 justify-center">
              <h2 className="
                text-2xl sm:text-3xl lg:text-4xl
                font-medium
              text-white
                leading-snug
                mb-8 lg:mb-12
                ">
                We build innovative digital products with forward-thinking partners.
              </h2>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 mb-12">
                <div className="flex items-center gap-4 text-neutral-400">
                  <Cpu className="w-6 h-6 shrink-0" />
                  <span className="text-sm sm:text-base text-neutral-400">Tech Development</span>
                </div>

                <div className="flex items-center gap-4 text-neutral-400">
                  <PencilRuler className="w-6 h-6 shrink-0" />
                  <span className="text-lg">Product Design</span>
                </div>

                <div className="flex items-center gap-4 text-neutral-400">
                  <Sparkles className="w-6 h-6 shrink-0" />
                  <span className="text-lg">AI Solutions</span>
                </div>

                <div className="flex items-center gap-4 text-neutral-400">
                  <TrendingUp className="w-6 h-6 shrink-0" />
                  <span className="text-lg">Growth Marketing</span>
                </div>

                <div className="flex items-center gap-4 text-neutral-400">
                  <RefreshCcw className="w-6 h-6 shrink-0" />
                  <span className="text-lg">Digital Transformation</span>
                </div>
              </div>

              {/* View all services CTA */}
              <button className="group mx-auto w-full lg:mx-0 flex items-start text-start gap-3 text-neutral-400 hover:text-white transition-colors">
                View all services
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Trusted By / Partner Logos Section */}
        <div className="relative z-10 w-full mx-auto px-6 sm:px-8 lg:px-12 mt-20 lg:mt-32">
          <div className="overflow-hidden">
            <div className="flex items-center gap-12 sm:gap-16 md:gap-24 animate-marquee md:animate-none whitespace-nowrap">
              {/* First set */}
              <Image src="/brands logo/67608fbae911f6aaf6dd24ca_Logo Samsung.svg" alt="Samsung" width={160} height={60} className="h-5 md:h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/67608fe5dab4348d94ee6cc9_Coca-Cola Brand.svg" alt="Coca-Cola" width={160} height={60} className="h-5 md:h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/67608ff410d975107897344c_Brand Verizon.svg" alt="Verizon" width={160} height={60} className="h-5 md:h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/676090109234d980622102dd_Brand DirecTV.svg" alt="DirecTV" width={160} height={60} className="h-5 md:h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/6760902d036c8f0efdfa14b7_Warner Music Group.svg" alt="Warner Music Group" width={160} height={60} className="h-5 md:h-8 w-auto grayscale hover:grayscale-0 transition" />

              {/* Duplicate set for seamless loop */}
              <Image src="/brands logo/67608fbae911f6aaf6dd24ca_Logo Samsung.svg" alt="Samsung" width={160} height={60} className="h-5 md:h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/67608fe5dab4348d94ee6cc9_Coca-Cola Brand.svg" alt="Coca-Cola" width={160} height={60} className="h-5 md:h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/67608ff410d975107897344c_Brand Verizon.svg" alt="Verizon" width={160} height={60} className="h-5 md:h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/676090109234d980622102dd_Brand DirecTV.svg" alt="DirecTV" width={160} height={60} className="h-5 md:h-8 w-auto grayscale hover:grayscale-0 transition" />
              <Image src="/brands logo/6760902d036c8f0efdfa14b7_Warner Music Group.svg" alt="Warner Music Group" width={160} height={60} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Top Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              isFeatured
            />
            ))}
          </div>
        </div>
        <div className="flex mx-auto px-4 sm:px-6 lg:px-8 w-full justify-start md:justify-center pt-20">
          <button
            onClick={() => router.push("/our-work")}
            className="
              group flex items-center gap-3
              bg-black text-white
              px-5 py-3 md:px-6 md:py-4
              rounded-full
              text-sm md:text-base
              font-medium
              hover:bg-neutral-600 transition
            "
          >
            <span>View all projects</span>

            {/* Arrow container */}
            <span className="relative w-5 h-5 overflow-hidden">
              
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
                  translate-x-3 translate-y-3
                  opacity-0
                  transition-all duration-300 ease-out
                  group-hover:translate-x-0 group-hover:translate-y-0
                  group-hover:opacity-100
                "
              />
            </span>
          </button> 
        </div>
          
      </section>


      {/* NEW: What We Do / Methodologies Section */}
      <WhatWeDo />
      
      {/* AboutUsSection */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Subtle curved background overlay */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/hero-background-gradient2.png"
          alt="Subtle curved lines background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-20">
          {/* Left: Image with rounded right curve */}
          <div className="relative">
            <div className="aspect-square md:h-[520px] lg:h-[620px] overflow-hidden rounded-l-full">
              <Image
                src="/67dc898397506cafcebc181f_visualelectric-1742506359313.avif"
                alt="Excited professional celebrating success"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-12">
            <p className="text-sm text-gray-500 uppercase tracking-wide">About Us</p>

            <h2 className="
              text-2xl md:text-3xl lg:text-4xl
              font-medium
              leading-snug
            text-gray-900
            ">
              We look for interesting challenges that move people forward.
            </h2>

            <div className="flex sm:flex-row gap-6 items-center">
              <button
                onClick={() => router.push("/services")}
                className="
                  inline-flex items-center gap-3
                  bg-black text-white
                  px-6 py-3
                  rounded-full
                  text-sm md:text-base
                  font-medium
                  hover:bg-neutral-600 transition
                ">
                Services
                {/* Arrow container */}
                  <span className="relative w-5 h-5 overflow-hidden">
                    
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
                        translate-x-3 translate-y-3
                        opacity-0
                        transition-all duration-300 ease-out
                        group-hover:translate-x-0 group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    />
                  </span>
              </button>

              <button
                onClick={() => router.push("/our-company")}
                className="
                  inline-flex items-center gap-3
                  text-sm md:text-base
                  font-medium
                text-gray-600
                hover:text-gray-900 transition
              ">
                About us
                {/* Arrow container */}
                  <span className="relative w-5 h-5 overflow-hidden">
                    
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
          </div>
        </div>
      </div>
    </section>

    {/* ContactCTASection */}
    <ContactCTASection />


    {/* Footer */}
    <Footer/>
    </main>
  );
}
